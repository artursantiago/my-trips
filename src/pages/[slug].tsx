import { useRouter } from 'next/dist/client/router'
import { GetStaticProps } from 'next'

import PagesService from 'core/service/PagesService'

import PageTemplate, { PageTemplateProps } from 'templates/Page'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths = async () => {
  const { pages } = await PagesService.getAll({ first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await PagesService.getBySlug(params?.slug ?? '')

  if (!page) return { notFound: true }

  return {
    revalidate: 60 * 60 * 24, // once per day,
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
