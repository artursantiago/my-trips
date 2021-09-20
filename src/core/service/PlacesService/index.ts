import client from 'core/service/client'
import { GetPlaceBySlugQuery, GetPlacesQuery } from '../generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from './queries'

type GetAllProps = {
  first?: number
}

class PlacesService {
  async getAll(props?: GetAllProps) {
    return await client.request<GetPlacesQuery>(GET_PLACES, {
      first: props?.first
    })
  }

  async getBySlug(slug: string | string[]) {
    return await client.request<GetPlaceBySlugQuery>(GET_PLACE_BY_SLUG, {
      slug: slug
    })
  }
}

export default new PlacesService()
