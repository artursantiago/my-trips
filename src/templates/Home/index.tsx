import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
const DynamicMap = dynamic(() => import('components/Map'), { ssr: false })

import { MapProps } from 'components/Map'

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://www.my-trips-artursantiago.vercel/"
        openGraph={{
          url: 'https://www.my-trips-artursantiago.vercel/',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://www.my-trips-artursantiago.vercel/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <DynamicMap places={places} />
    </>
  )
}
