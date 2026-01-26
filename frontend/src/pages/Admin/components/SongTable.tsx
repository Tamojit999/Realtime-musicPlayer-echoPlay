import { useMusicStore } from "@/stores/useMusicStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SongTable = () => {
  const { songs, isLoading, error, deleteSong } = useMusicStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-zinc-400">Loading songs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        {/* ================= HEADER ================= */}
        <TableHeader>
          <TableRow className="hover:bg-zinc-800/50">
            <TableHead className="w-12.5"></TableHead>

            <TableHead className="text-sm sm:text-base">
              Title
            </TableHead>

            <TableHead className="hidden sm:table-cell">
              Artist
            </TableHead>

            <TableHead className="hidden md:table-cell">
              Release Date
            </TableHead>

            <TableHead className="text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* ================= BODY ================= */}
        <TableBody>
          {songs.map((song) => (
            <TableRow
              key={song._id}
              className="hover:bg-zinc-800/50"
            >
              {/* Image */}
              <TableCell className="py-2">
                <img
                  src={song.imageUrl}
                  alt={song.title}
                  className="size-8 sm:size-10 rounded object-cover"
                />
              </TableCell>

              {/* Title */}
              <TableCell className="font-medium text-sm sm:text-base">
                {song.title}
              </TableCell>

              {/* Artist (hidden on mobile) */}
              <TableCell className="hidden sm:table-cell text-sm">
                {song.artist}
              </TableCell>

              {/* Date (hidden on mobile & tablet) */}
              <TableCell className="hidden md:table-cell">
                <span className="inline-flex items-center gap-1 text-zinc-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  {song.createdAt.split("T")[0]}
                </span>
              </TableCell>

              {/* Actions */}
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  onClick={() => deleteSong(song._id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
