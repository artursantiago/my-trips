import { GraphQLClient } from 'graphql-request'

import { GRAPHQL_HOST, GRAPHQL_TOKEN } from 'core/config'

const endpoint = GRAPHQL_HOST || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${GRAPHQL_TOKEN}`
  }
})

export default client
