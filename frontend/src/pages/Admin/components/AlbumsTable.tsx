import { useMusicStore } from '@/stores/useMusicStore'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect } from 'react'
import { Calendar, Music, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AlbumsTable = () => {
    const { albums, deleteAlbum, fetchAlbums, isLoading, error } = useMusicStore();
    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="text-zinc-400">Loading Albums....</div>
            </div>
        );
    }
    if(error)
    {
        return(
            <div className="flex items-center justify-center py-8">
                <div className="text-red-400">{error}</div>
            </div>
        );
    }
  


    return (
        <div className='w-full overflow-x-auto'>
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-zinc-800/50">
                        <TableHead className='w-[50px]'></TableHead>
                        <TableHead className='text-sm sm:text-base'>Title</TableHead>
                        <TableHead className='hidden sm:table-cell'>Artist</TableHead>
                        <TableHead className='hidden sm:table-cell'>Releae Year</TableHead>
                        <TableHead className='hidden sm:table-cell'>Song</TableHead>
                        <TableHead className='text-right'>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
          {albums.map((album) => (
            <TableRow
              key={album._id}
              className="hover:bg-zinc-800/50"
            >
              {/* Image */}
              <TableCell className="py-2">
                <img
                  src={album.imageUrl}
                  alt={album.title}
                  className="size-8 sm:size-10 rounded object-cover"
                />
              </TableCell>

              {/* Title */}
              <TableCell className="font-medium text-sm sm:text-base">
                {album.title}
              </TableCell>

              {/* Artist (hidden on mobile) */}
              <TableCell className="hidden sm:table-cell text-sm">
                {album.artist}
              </TableCell>

              {/* Date (hidden on mobile & tablet) */}
              <TableCell className="hidden md:table-cell">
                <span className="inline-flex items-center gap-1 text-zinc-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  {album.createdAt.split("T")[0]}
                </span>
              </TableCell>
              <TableCell className="hidden md:table-cell">
							<span className='inline-flex items-center gap-1 text-zinc-400'>
								<Music className='h-4 w-4' />
								{album.songs.length} songs
							</span>
						</TableCell>

              {/* Actions */}
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  onClick={() => deleteAlbum(album._id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>








            </Table>
           







        </div>
    )
}

export default AlbumsTable