import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const initialCustumerState = {
  fullName: '',
  email: '',
  phoneNumber: '',
}

const initialBilling = {
  address: {
    line1: '',
    city: '',
    state: '',
    postal_code: '',
  },
}

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext()
  const { myUser } = useUserContext()
  const navigate = useNavigate()
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const [customerName, setCustomerName] = useState(initialCustumerState)
  const [billing, setBilling] = useState(initialBilling)
  const finalPrice = total_amount + shipping_fee

  const orderFunction = () => {
    let theProduct = ''
    cart.forEach((element, index) => {
      const { name, color, amount } = element
      theProduct += `ORDER ${
        index + 1
      }: ${name}  COLOR: ${color} QTY: ${amount} || `
    })

    return theProduct
  }

  function changeCustomerName(e) {
    const name = e.target.name
    const value = e.target.value

    setCustomerName((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  function changeBilling(e) {
    const name = e.target.name
    const value = e.target.value

    setBilling((prevData) => {
      return {
        address: {
          ...prevData.address,
          [name]: value,
        },
      }
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [succeeded])

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        '/.netlify/functions/create-payment-intent',

        JSON.stringify({ cart, shipping_fee, total_amount })
      )
      setClientSecret(data.clientSecret)
    } catch (error) {
      // console.log(error.response)
    }
  }
  useEffect(() => {
    createPaymentIntent()
    // eslint-disable-next-line
  }, [])

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
      receipt_email: customerName.email,
      shipping: {
        name: `${customerName.fullName}`,
        phone: `${customerName.phoneNumber}`,
        carrier: `${orderFunction()}`,
        address: {
          ...billing.address,
        },
      },
    })
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      setTimeout(() => {
        clearCart()
        navigate('/')
      }, 10000)
    }
  }
  return (
    <>
      {succeeded && (
        <section className="semi-overlay">
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
            <p className="result-message">Payment succeeded</p>
            <article className="grand-total-container">
              <h4>GRAND TOTAL</h4>
              <div className="grand-total-product-container">
                {cart.map((item, index) => {
                  return (
                    <div key={index} className="product-total-details">
                      <img className="img-total" src={item.image} />
                      <div>
                        <p className="product-total-name">{item.name}</p>
                        <p className="product-total-price-qty">
                          Price: <span>{formatPrice(item.price)}</span>
                        </p>
                        <p className="product-total-price-qty">
                          Qty: <span>{item.amount}</span>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="shipping-fee">
                Shipping Fee: {formatPrice(shipping_fee)}
              </p>
              <p className="final-price">
                FINAL PRICE: <span>{formatPrice(finalPrice)}</span>
              </p>
            </article>
            <p>
              <strong>Invoice Will Be Emailed Shortly</strong>
            </p>
          </article>
        </section>
      )}
      <div className={succeeded ? 'backgroundOpacity' : ''}>
        <form id="payment-form" onSubmit={handleSubmit}>
          <h3>BILLING DETAILS</h3>
          <div className="grid-layout-container">
            <div>
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                placeholder="Alexel Ward"
                id="fullName"
                name="fullName"
                value={customerName.fullName}
                onChange={changeCustomerName}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="alexi@mail.com"
                id="email"
                name="email"
                value={customerName.email}
                onChange={changeCustomerName}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                placeholder="+1 202-555-0136"
                id="phoneNumber"
                name="phoneNumber"
                value={customerName.phoneNumber}
                onChange={changeCustomerName}
                required
              />
            </div>
          </div>
          {/* shipping */}
          <h3>SHIPPING INFO</h3>
          <div className="grid-layout-container">
            <div className="form-address-container">
              <label htmlFor="address">Your Address</label>
              <input
                type="text"
                placeholder="1137 Williams Avenue"
                id="address"
                name="line1"
                value={billing.address.line1}
                onChange={changeBilling}
                required
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="Ottawa"
                id="city"
                name="city"
                value={billing.address.city}
                onChange={changeBilling}
                required
              />
            </div>
            <div>
              <label>State</label>
              <input
                type="text"
                placeholder="Ontario"
                id="city"
                name="state"
                value={billing.address.state}
                onChange={changeBilling}
                required
              />
            </div>
            <div>
              <label htmlFor="zipCode">ZIP Code</label>
              <input
                type="text"
                placeholder="X28 4C9"
                id="zipCode"
                name="postal_code"
                value={billing.address.zipCode}
                onChange={changeBilling}
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                placeholder="United State"
                id="country"
                name="country"
                value="Canada"
                required
              />
            </div>
          </div>
          <article className="grand-total-container">
            <h4>GRAND TOTAL</h4>
            <div className="grand-total-product-container">
              {cart.map((item, index) => {
                return (
                  <div key={index} className="product-total-details">
                    <img className="img-total" src={item.image} />
                    <div>
                      <p className="product-total-name">{item.name}</p>
                      <p className="product-total-price-qty">
                        Price: <span>{formatPrice(item.price)}</span>
                      </p>
                      <p className="product-total-price-qty">
                        Qty: <span>{item.amount}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="shipping-fee">
              Shipping Fee: {formatPrice(shipping_fee)}
            </p>
            <p className="final-price">
              FINAL PRICE: <span>{formatPrice(finalPrice)}</span>
            </p>
          </article>

          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
          <button disabled={processing || disabled || succeeded} id="submit">
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                'Pay'
              )}
            </span>
          </button>
          {/* Show any error that happens when processing the payment */}
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          {/* Show a success message upon completion */}
          <p className={succeeded ? 'result-message' : 'result-message hidden'}>
            Payment succeeded, see the result in your
            <a href={`https://dashboard.stripe.com/test/payments`}>
              {' '}
              Stripe dashboard.
            </a>{' '}
            Refresh the page to pay again.
          </p>
        </form>
      </div>
    </>
  )
}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .backgroundOpacity {
    opacity: 0.1;
  }

  .grand-total-container {
    .shipping-fee {
      font-size: 12px;
      color: var(--secondy-chocolate);
    }
  }
  .grand-total-container {
    .final-price {
      color: gray;
      span {
        color: var(--secondy-chocolate);
      }
    }
  }

  .img-total {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  .product-total-details {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    .product-total-name {
      font-size: 12px;
      color: var(--secondy-chocolate);
    }
    .product-total-price-qty {
      font-size: 10px;
      color: var(--actual-black);
      span {
        color: var(--secondy-chocolate);
      }
    }
    p {
      margin-bottom: 5px;
    }
  }

  .semi-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  form {
    width: 90vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: var(--primary-chocolate);
    font-family: Arial, sans-serif;
    color: var(--actual-white);
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 90vw;
    }
  }

  input {
    width: 100%;
    padding: 19px 0 19px 24px;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    background: #fff;
    color: #000;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    opacity: 0.4;
    margin-bottom: 24px;
  }
  label {
    color: #000;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.214px;
    margin-bottom: 9px;
  }

  h3 {
    color: #d87d4a;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 0.929px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .grand-total-container {
    /* height: 92px; */
    flex-shrink: 0;
    border-radius: 8px;
    h4 {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
    }
    p {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }
  .success-container {
    padding: 50px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid var(--actual-black);
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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

  @media (min-width: 768px) {
    .grid-layout-container,
    .grand-total-product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 18px;
    }
    .form-address-container {
      grid-column: span 2;
    }
  }
  .disabled {
    opacity: 0.4;
    background: #000;
  }
`

export default StripeCheckout
