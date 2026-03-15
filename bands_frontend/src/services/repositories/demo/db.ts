import { ArtistResponse } from "../artists"
import { MetricResponse } from "../metrics"
import { ScoreResponse } from "../scores"
import { DemoArtist, DemoMetric, DemoScore } from "./data"

let instance : DemoDB | undefined

export class DemoDB {
    artists: {[key: number]: ArtistResponse} = {}
    metrics: {[key: number]: MetricResponse} = {}
    scores: {[key: number]: ScoreResponse} = {}

    constructor (artists: DemoArtist[], metrics: DemoMetric[], scores: DemoScore[]) {
        if (instance !== undefined)
            return instance
        artists.forEach((artist) => {
            this.artists[artist.id] = {...artist, image_url: "", created_at: new Date(), scores: []}
        })
        metrics.forEach((metric) => {
            this.metrics[metric.id] = {...metric, type: metric.type === 0 ? "flag" : "value"}
        })
        scores.forEach((score) => {
            this.scores[score.id] = {value: score.value, artist: score.artist_id, metric: score.metric_id}
            const metric = this.metrics[score.metric_id]
            this.artists[score.artist_id].scores.push({
                id: score.id,
                metric: metric.name,
                type: metric.type,
                category: metric.category,
                value: score.value
            })
        })
        instance = this
    }
}