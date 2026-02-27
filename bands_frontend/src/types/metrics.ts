export type Metric = {
    id: number
    name: string
    type: MetricType
    category: string
    color: string
}

export type NewMetric = {
    name: string
    type: MetricType
    category: string
}

export enum MetricType {
    value = 'value',
    flag = 'flag'
}
