import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

type ImageProps = {
  id: string
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  return (
    <S.Container>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://www.my-trips-artursantiago.vercel/"
        openGraph={{
          url: 'https://www.my-trips-artursantiago.vercel/',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/" aria-label="Home">
        <CloseOutline size="32" />
      </LinkWrapper>

      <S.ContentWrapper>
        <S.Content>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html ?? '' }}
          />

          <S.Gallery>
            {place.gallery.map((image) => (
              <Image
                key={`photo-${image.id}`}
                src={image.url}
                alt={place.name}
                height={image.height}
                width={image.width}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Content>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default PlaceTemplate
