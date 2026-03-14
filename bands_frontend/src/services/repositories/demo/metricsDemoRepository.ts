import { NewMetric } from "@/types/metrics";
import { MetricResponse, MetricsRepositrory } from "../metrics";
import { DemoDB } from "./db";

export class MetricsDemoRepository implements MetricsRepositrory {
    db: DemoDB

    constructor (db: DemoDB) {
        this.db = db
    }

    async index (): Promise<MetricResponse[]> {
        return Object.values(this.db.metrics).sort((metric) => metric.id)
    }

    async create (metric: NewMetric): Promise<MetricResponse> {
        const newId = Object.keys(this.db.metrics).length
        return {
            ...metric,
            id: newId,
        }
    }
}