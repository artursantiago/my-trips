import { gql } from 'graphql-request'

export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      slug
      name
      description {
        html
      }
      location {
        latitude
        longitude
      }
      gallery {
        id
        width
        height
        url
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      description {
        html
        text
      }
      location {
        latitude
        longitude
      }
      gallery {
        id
        width
        height
        url
      }
    }
  }
`
