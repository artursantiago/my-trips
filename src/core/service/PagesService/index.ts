import { GetPageBySlugQuery, GetPagesQuery } from '../generated/graphql'

import client from 'core/service/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from './queries'

type GetAllProps = {
  first?: number
}

class PagesService {
  async getAll({ first }: GetAllProps) {
    return await client.request<GetPagesQuery>(GET_PAGES, {
      first: first
    })
  }

  async getBySlug(slug: string | string[]) {
    return await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
      slug: slug
    })
  }
}

export default new PagesService()
