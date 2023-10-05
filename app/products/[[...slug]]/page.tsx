import React from 'react'


interface Props {
    params: {
        slug: string[]
    }
    searchParams: {sortOrder: string}
}

const ProductPage = ({params, searchParams}: Props) => {
const {slug} = params
const {sortOrder} = searchParams
  return (
    <div>
      {sortOrder}
    </div>
  )
}

export default ProductPage
