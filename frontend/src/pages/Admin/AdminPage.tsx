import { useAuthStore } from '@/stores/useAuthStore';

import  { useEffect } from 'react';
import DashboardStats from  './components/DashBoardStats';
import Header from './components/Header';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Album, Music } from 'lucide-react';
import { TabsContent } from '@radix-ui/react-tabs';
import SongsTabContent from './components/SongsTabContent';
import AlbumsTabContent from './components/AlbumsTabContent';
import { useMusicStore } from '@/stores/useMusicStore';

const AdminPage = () => {
    const {isAdmin,isLoading}=useAuthStore();

    const {fetchSongs,fetchAlbums,fetchStats}=useMusicStore();
    useEffect(()=>{
        fetchSongs();
        fetchAlbums();
        fetchStats();
    },[fetchAlbums,fetchSongs,fetchStats]);





    if(!isAdmin && !isLoading ) return <div>Unauthorized</div>
  return (
    <div className='min-h-screen bg-linear-to-b from-zinc-900 via-zinc-900
   to-black text-zinc-100 p-8'
	>
        <Header/>
        <DashboardStats/>


        <Tabs defaultValue='songs' className='space-y-6 '>
            <TabsList className=' bg-zinc-800/50'>
                <TabsTrigger value='songs' className=' bg-zinc-700 text-zinc-100 data-state:active:bg-zinc-900'>
                <Music className='mr-2 size-4'/> Songs
                </TabsTrigger>
                <TabsTrigger value='albums' className=' bg-zinc-700 text-zinc-100 data-state:active:bg-zinc-900'>
                <Album className='mr-2 size-4'/>
                Albums
                </TabsTrigger>
            </TabsList>
            <TabsContent value='songs'>
               <SongsTabContent/>

            </TabsContent>
            <TabsContent value='albums'>
                <AlbumsTabContent/>

            </TabsContent>
            
        </Tabs>



    </div>
  )
}

export default AdminPage