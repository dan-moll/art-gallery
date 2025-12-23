import { Artwork } from './types';
import artworksData from '@/data/artworks.json';

export function getAllArtworks(): Artwork[] {
  return artworksData as Artwork[];
}

export function getArtworkById(id: string): Artwork | undefined {
  return artworksData.find((artwork) => artwork.id === id);
}

export function getArtworksPaginated(offset: number = 0, limit: number = 10): Artwork[] {
  return artworksData.slice(offset, offset + limit);
}
