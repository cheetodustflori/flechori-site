// components/SpotifyWidget.tsx
import { getNowPlaying } from "@/lib/spotify";

export default async function SpotifyWidget() {
  const response = await getNowPlaying();

  // 204 means nothing is playing
  if (response.status === 204 || response.status > 400) {
    return (
      <div className="flex items-center gap-3 p-3 border rounded-lg font-larken opacity-50">
         <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
         <p>Not listening to anything</p>
      </div>
    );
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return (
    <a 
      href={songUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 border rounded-xl hover:shadow-md transition-shadow font-larken max-w-sm"
    >
      <div className="relative w-12 h-12">
        <img src={albumImageUrl} alt={title} className="rounded-md object-cover" />
        {isPlaying && (
          <div className="absolute -bottom-1 -right-1 flex gap-0.5 bg-black p-1 rounded-sm">
            <div className="w-1 h-3 bg-green-500 animate-[bounce_1s_infinite]" />
            <div className="w-1 h-3 bg-green-500 animate-[bounce_1.2s_infinite]" />
            <div className="w-1 h-3 bg-green-500 animate-[bounce_0.8s_infinite]" />
          </div>
        )}
      </div>
      <div className="flex flex-col overflow-hidden">
        <p className="font-bold truncate">{title}</p>
        <p className="text-sm text-gray-600 truncate">{artist}</p>
      </div>
    </a>
  );
}