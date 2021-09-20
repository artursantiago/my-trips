import CustomTileLayer from 'components/CustomTileLayer'
import { useRouter } from 'next/dist/client/router'
import { MapContainer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  function handleMarkerClick(slug: string) {
    router.push(`places/${slug}`)
  }

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />
      {places?.map(({ id, name, location, slug }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            title={name}
            position={[latitude, longitude]}
            eventHandlers={{
              click: () => {
                handleMarkerClick(slug)
              }
            }}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
