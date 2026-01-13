import { axiosInstance } from '@/lib/axios';
import type { Album, Song } from '@/type';
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

    fetchAlbums: ()=> Promise<void>;
    fetchAlbumId:(id:string)=> Promise<void>;
    fetchTrendingSongs:()=>Promise<void>;
    fetchFeaturedSongs:()=>Promise<void>;
    fetchMadeForSongs:()=>Promise<void>;
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


}))