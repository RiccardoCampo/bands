import { Artist } from "@/types/artist"



export type ScoreResponse = {
  artist: number
  metric: number
  value: number
}


export interface ScoresRepository {
  create (artistId: number, metricId: number, value: number): Promise<ScoreResponse>
  update (id: number, value: number): Promise<ScoreResponse>
  upsertBulk (artist: Artist): Promise<void>
  destroy (id: number): Promise<void>
}
