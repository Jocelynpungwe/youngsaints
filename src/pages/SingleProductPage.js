import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
  SmallWebDescription,
  FeaturedProducts,
  YouMayLike,
  ProductBox,
} from '../components'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { data } from '../utils/constants'
const SingleProductPage = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [id])

  const newData = data.find((product) => product.id === Number(id))

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    category,
    images,
  } = newData

  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <PageHero title={category} />
      <div className="section section-center page">
        <Link to="/" className="btn">
          back to home
        </Link>
        <div className="product-center">
          <ProductImages setMain={setMain} main={main} images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>

            <p className="info">
              <span>Brand : </span>
              yvng saints {category}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={newData} />}
          </section>
        </div>

        <FeaturedProducts setMain={setMain} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  img {
    width: 100%;
  }
  .feature-desc {
    color: #000;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }

  h6 {
    color: #000;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: 0.857px;
    text-transform: uppercase;
    margin: 20px 0;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--secondy-chocolate);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .inbox-container {
    p {
      color: #000;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
      span {
        color: var(--primary-chocolate);
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 166.667% */
      }
    }
  }

  .feature-and-inbox-container {
    margin: 50px 0;
  }

  @media (min-width: 550px) {
    .product-image-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
    }
  }

  @media (min-width: 768px) {
    .feature-and-inbox-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
