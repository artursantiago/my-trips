import HomeTemplate from 'templates/Home'

import PlacesService from 'core/service/PlacesService'

import { MapProps } from 'components/Map'

export default function HomePage({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await PlacesService.getAll()

  return {
    props: { places }
  }
}
