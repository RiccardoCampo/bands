import { Metric, MetricType } from "./metrics"

export type Score = {
    id: number,
    metric: string,
    type: MetricType,
    value: number
}

export type NewScore = {
    metricId: number,
    value: number
}

export type ScoreFilter = {
    metric: Metric
    filterValues: FilterValues
}

export type FilterValues = {
    minValue: number
    maxValue: number
}