import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import { data } from '../utils/constants'

const ProductList = () => {
  const { grid_view } = useFilterContext()

  if (data.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView products={data} />
  }
  return <GridView products={data} />
}

export default ProductList
