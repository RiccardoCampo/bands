import { ArtistAlreadyExistsError } from '@/exceptions';
import { Artist } from '@/types/artist';
import { MetricType } from '@/types/metrics';
import { ScoreFilter } from '@/types/score';
import axios from 'axios'
import { ArtistResponse, ArtistsPage, ArtistsRepository } from '../artists';

const BASE_URL = `${process.env.VUE_APP_BANDS_API_URL}/artist/`

export type ArtistCreateRequest = {
  name: string
  link_url: string | null
  image_url: string | null
  rating: number
}

export type ArtistUpdateRequest = {
  name: string
  link_url: string | null
  image_url: string | null
  rating: number
}


export class ArtistsAPIRepository implements ArtistsRepository {
  async index (page: number, name: string, scoreFilters: ScoreFilter[]): Promise<ArtistsPage> {
    let queryString = `page=${page}`

    if (name)
      queryString += `&name=${name}`

    if (scoreFilters)
      scoreFilters.forEach(scoreFilter => {
        if (scoreFilter.metric.type == MetricType.value)
          queryString += `&${scoreFilter.metric.name}=[${scoreFilter.filterValues.minValue},${scoreFilter.filterValues.maxValue}]`
        else
          queryString += `&${scoreFilter.metric.name}=1`
      });

    return (await axios.get(`${BASE_URL}?${queryString}`)).data
  }
  async retrieve (id: number): Promise<ArtistResponse> {
    return (await axios.get(`${BASE_URL}${id}/`)).data
  }
  async create (artist: Artist): Promise<ArtistResponse> {
    try {
      return (await axios.post(BASE_URL, {
        name: artist.name,
        rating: artist.rating,
        link_url: artist.linkUrl,
        image_url: artist.imageUrl
      } as ArtistCreateRequest)).data
    } catch (error: any) {
      if (error.response?.data?.integrity_error !== undefined)
        throw new ArtistAlreadyExistsError("An artist with this name already exist")
      throw error
    }
  }
  async update (artist: Artist): Promise<ArtistResponse> {
    return (await axios.put(`${BASE_URL}${artist.id}/`, {
        name: artist.name,
        rating: artist.rating,
        link_url: artist.linkUrl,
        image_url: artist.imageUrl
      } as ArtistUpdateRequest)).data
  }
  async getSimilar (artistId: number): Promise<ArtistResponse[]> {
    return (
      await axios.get(`${BASE_URL}${artistId}/similar/`)
    ).data
  }
}
