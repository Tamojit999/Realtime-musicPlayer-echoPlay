import { axiosInstance } from '@/lib/axios';
import type { Album, Song, Stats } from '@/type';
import toast from 'react-hot-toast';
import {create} from 'zustand'; // this is use  for creating global store it store the data from the database and we can access it from anywhere without performing the fetch operation everytime
 

interface MusicStore{ // interface is use because we are using a typesript
    songs:Song[];
    albums:Album[];
    isLoading:boolean;
    error:string | null;
    curralbum:Album|null;
    trendingSong:Song[];
    featuredSong:Song[];
    madeForSong:Song[];
    stats:Stats;

    fetchAlbums: ()=> Promise<void>;
    fetchAlbumId:(id:string)=> Promise<void>;
    fetchTrendingSongs:()=>Promise<void>;
    fetchFeaturedSongs:()=>Promise<void>;
    fetchMadeForSongs:()=>Promise<void>;
    fetchStats:()=>Promise<void>;
    fetchSongs:()=>Promise<void>;
    deleteSong:(id:string)=>Promise<void>;
    deleteAlbum:(id:string)=>Promise<void>
}

export const useMusicStore=create<MusicStore>((set)=>({
    albums:[],
    songs:[],
    isLoading:false,
    error:null,
    curralbum:null,
    featuredSong:[],
    madeForSong:[],
    trendingSong:[],
    stats:{
        totalAlbums:0,
        totalArtists:0,
        totalSongs:0,
        totalUser:0
    },
    fetchAlbums:async()=>
    {
        set({isLoading:true,error:null});
        try {
            const response=await axiosInstance.get('/albums');
        set({albums:response.data})
            
        } catch (error:any) {
            set({error:error.response.data.message})
            
        }
        finally{
            set({isLoading:false});
        }
        
    },
    fetchAlbumId:async(id:string)=>
    {
         set({isLoading:true,error:null});
         try {
            const response=await axiosInstance.get(`/albums/${id}`);
            set({curralbum:response.data})
            
         } catch (error:any) {
            set({error:error?.response?.data?.message ?? String(error)})
            
         }
         finally{
            set({isLoading:false});
        }
        
    },
    fetchFeaturedSongs:async()=> {
        set({isLoading:true,error:null});
        try {
        const response=await axiosInstance.get('/songs/featured');
        set({featuredSong:response.data});
            
        } catch (error:any) {
            set({error:error.response.data.message})
            
        }
        finally{
            set({isLoading:false});
        }
        
        
    },
    fetchTrendingSongs:async()=> {
        set({isLoading:true,error:null});
        try {
        
        const response=await axiosInstance.get('/songs/trending');
        set({trendingSong:response.data});
            
        } catch (error:any) {
            set({error:error.response.data.message})
            
        }
        finally{
            set({isLoading:false});
        }

        
        
    },
    fetchMadeForSongs:async()=> {
        set({isLoading:true,error:null});
        try {
        
        const response=await axiosInstance.get('/songs/made-for-you');
        set({madeForSong:response.data});
            
        } catch (error:any) {
            set({error:error.response.data.message})
            
        }
        finally{
            set({isLoading:false});
        }

        
       
    },
    fetchStats:async()=>
    {
        set({isLoading:true,error:null});
        try {
            const response=await axiosInstance.get('/stats');
            set({stats:response.data});
            
        } catch (error:any) {
            set({error:error.response.data.message})
            
        }
        finally{
            set({isLoading:false});
        }

    },
    fetchSongs:async()=>{
         set({isLoading:true,error:null});
        try {
            const response=await axiosInstance.get('/songs');
            set({songs:response.data});
            
        } catch (error:any) {
            set({error:error.response.data.message})
            
        }
        finally{
            set({isLoading:false});
        }

    },
    deleteSong:async(id)=>
    {
        set({isLoading:true,error:null});
        try {
            await axiosInstance.delete(`/admin/songs/${id}`);
            set(state=>({songs:state.songs.filter(song=>song._id!==id)}));
            toast.success('Song deleted successfully');
        } catch (error:any) {
            set({error:error.response.data.message})
            
        }
        finally{
            set({isLoading:false});
        }
    },
    deleteAlbum:async (id:string) => {
		set({ isLoading: true, error: null });
		try {
			await axiosInstance.delete(`/admin/albums/${id}`);
			set((state) => ({
				albums: state.albums.filter((album) => album._id !== id),
				songs: state.songs.map((song) =>
					song.albumId === state.albums.find((a) => a._id === id)?.title ? { ...song, album: null } : song
				),
			}));
			toast.success("Album deleted successfully");
		} catch (error: any) {
			toast.error("Failed to delete album: " + error.message);
		} finally {
			set({ isLoading: false });
		}
	},
    


}))