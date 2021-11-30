import React from 'react'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { Layout } from '@components/common'
import { getAllProductsPaths, getProduct } from '@framework/product'
import { getConfig } from '@framework/api/config'

// fetch all of products slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig()
  const { products } = await getAllProductsPaths(config)

  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

// provide product specific data to the page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig()
  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug },
  })

  return {
    props: {
      product,
    },
  }
}

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div>{JSON.stringify(product, null, 2)}</div>
    </>
  )
}

ProductSlug.Layout = Layout