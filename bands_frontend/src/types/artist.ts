import { NewScore, Score } from "./score"

export type Artist = {
    id?: number
    name: string
    rating: number
    imageUrl?: string | null
    linkUrl?: string | null
    scores: Array<Score>
    newScores: Array<NewScore>
}