export interface Artwork {
  id: string;
  filename: string;
  artistName: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  width: number;
  height: number;
  aspectRatio?: number;
}

export interface ArtworkCardProps {
  artwork: Artwork;
}
