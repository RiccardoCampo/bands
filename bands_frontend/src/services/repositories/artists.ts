import { Artist } from "@/types/artist"
import { ScoreFilter } from "@/types/score"



export type ArtistScoreResponse = {
  id: number
  metric: string
  type: string
  category: string
  value: number
}

export type ArtistResponse = {
  id: number
  name: string
  link_url: string | null
  image_url: string | null
  rating: number
  created_at: Date
  scores: ArtistScoreResponse[]
}

export type ArtistsPage = {
  results: ArtistResponse[]
  next: number | null
}

export interface ArtistsRepository {
  index (page: number, name: string, scoreFilters: ScoreFilter[]): Promise<ArtistsPage>
  retrieve (id: number): Promise<ArtistResponse>
  create (artist: Artist): Promise<ArtistResponse>
  update (artist: Artist): Promise<ArtistResponse>
  getSimilar (artistId: number): Promise<ArtistResponse[]>
}
