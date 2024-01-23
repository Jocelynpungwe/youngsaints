import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Product = ({ id, images, name, price, category, description }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={images[0]} alt={name} />
        <div className="info-div">
          <h4>{name}</h4>
          <h5 className="price">{formatPrice(price)}</h5>
          <p>{description.substring(0, 150)}...</p>
          <Link to={`/${id}`} className="btn">
            Details
          </Link>
        </div>
      </div>
      {/* <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer> */}
    </Wrapper>
  )
}
const Wrapper = styled.article`
  text-align: center;
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--secondy-chocolate);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }

  .container {
    position: relative;
    border-radius: var(--radius);
  }
  .info-div {
    margin-top: 10px;
  }

  img {
    width: 100%;
    min-height: 50vh;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product
