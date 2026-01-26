import { Button } from '@/components/ui/button';
import { usePlayerStore } from '@/stores/usePlayerStore';
import type { Song } from '@/type'
import {Pause, Play } from 'lucide-react';


const PlayButton = ({song}:{song:Song}) => {
    const {currentSong,togglePlay,isPlaying,setCurrentSong}=usePlayerStore();
     const isCurrentSong=currentSong?._id===song._id;
     const handlePlay=()=>{
        if(isCurrentSong) togglePlay();
        else setCurrentSong(song);
     }
  return (
    <Button onClick={handlePlay} size='icon' className={`absolute bottom-3 right-2 bg-linear-to-r from-purple-500 via-pink-500 to-teal-400 hover:from-purple-600 hover:via-pink-600 hover:to-teal-500 hover:scale-105 transition-all 
				opacity-0 translate-y-2 group-hover:translate-y-0 ${
					isCurrentSong ? "opacity-100" : "opacity-0 group-hover:opacity-100"
				}`}>
                    {isCurrentSong && isPlaying ? (
				<Pause className='size-5 text-black' />
			) : (
				<Play className='size-5 text-black' />
			)}


         </Button>
   
  )
}

export default PlayButton