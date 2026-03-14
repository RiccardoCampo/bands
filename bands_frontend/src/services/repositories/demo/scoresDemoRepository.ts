import { Artist } from "@/types/artist";
import { ScoreResponse, ScoresRepository } from "../scores";
import { DemoDB } from "./db";

export class ScoresDemoRepository implements ScoresRepository {
    db: DemoDB

    constructor (db: DemoDB) {
        this.db = db
    }

    async create (artistId: number, metricId: number, value: number): Promise<ScoreResponse> {
        const newId = Object.keys(this.db.scores).length
        const newScore = {
            artist: artistId,
            metric: metricId,
            value: value
        }
        this.db.scores[newId] = newScore

        const metric = this.db.metrics[metricId]
        this.db.artists[artistId].scores.push(
            {
                id: newId,
                metric: metric.name,
                type: metric.type,
                category: metric.category,
                value: newScore.value
            }
        )
        return newScore
    }

    async update (id: number, value: number): Promise<ScoreResponse> {
        const existingScore = this.db.scores[id]
        existingScore.value = value
        this.db.scores[id] = existingScore

        this.db.artists[existingScore.artist].scores.forEach((score) => {
                if (score.id == id) {
                    score.value = value
                }
            }
        )
        return existingScore
    }

    async upsertBulk (artist: Artist): Promise<void> {
        artist.newScores.forEach(
            (score) => {
                this.create(artist.id ?? 0, score.metricId, score.value)
            }
        )
        artist.scores.forEach(
            (score) => {
                this.update(score.id, score.value)
            }
        )
    }

    async destroy (id: number): Promise<void> {
        const existingScore = this.db.scores[id]
        const artist = this.db.artists[existingScore.artist]
        artist.scores = artist.scores.filter((score) => {return score.id !== id})
        this.db.artists[existingScore.artist] = artist
    }
}