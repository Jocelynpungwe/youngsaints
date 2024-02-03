import React, { useEffect, useRef } from 'react'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function SuccessPage() {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext()
  const navigate = useNavigate()
  const formRef = useRef()

  useEffect(() => {
    // Auto-submit the form after the component mounts
    formRef.current.submit()
  }, [])

  setTimeout(() => {
    navigate('/')
  }, 10000)

  return (
    <Wrapper>
      <form
        ref={formRef}
        action="https://formspree.io/f/xknlalqv"
        method="post"
      >
        {/* Your form fields go here */}
        <input type="text" name="username" value="Username red" />
        <input type="password" name="password" value="Password blue" />
      </form>

      <article className="success-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="32" fill="#D87D4A" />
          <path
            d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <h4 className="thank-message">THANK YOU FOR YOUR ORDER</h4>
        <p className="result-message">
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {' '}
            Stripe dashboard.
          </a>{' '}
        </p>
        <div className="sucessfull-grand-total">
          <h4 className="grand-total">GRAND TOTAL</h4>
          <h4 className="actual-total">{formatPrice(total_amount)}</h4>
        </div>
        <p>Redirecting to home page shortly</p>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .success-container {
    padding: 50px;

    border-radius: 8px;
    background: #fff;
    border: 1px solid var(--actual-black);

    .thank-message {
      color: #000;
      font-family: Manrope;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 116.667% */
      letter-spacing: 0.857px;
      text-transform: uppercase;
    }

    .sucessfull-grand-total {
      background: var(--primary-chocolate);
      padding: 20px;
      width: 100%;
      border-radius: 8px;
      .grand-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 166.667% */
        opacity: 0.5;
      }
      .actual-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
    }
  }
`

export default SuccessPage
