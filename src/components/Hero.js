import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/young/logo/logo-brown-seethrough.PNG'

const Hero = () => {
  return (
    <section className="background-hero">
      <Wrapper className="section-center">
        <article className="content">
          <div className="container">
            <h1>Embrace Your Faith</h1>
            <p className="hero-product">Elevate Your Style</p>
            <p className="hero-description">
              YVNG Saints Unveils a Collection Where Fashion Meets Faith.
              Crafted for the Modern Believer. Explore Now for a Fusion of Faith
              and Flair!
            </p>
            <Link to="/3" className="btn primary-btn">
              Explore Now
            </Link>
          </div>
        </article>
        <article className="img-container">
          <img src={heroBcg} alt="phone drawing" className="main-img" />
        </article>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.section`
  height: calc(100vh - 11rem);
  display: grid;
  place-items: center;
  animation-name: fadeIn;
  animation-duration: 4s;

  .img-container {
    display: none;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h1 {
    color: white;
    text-align: center;
    font-family: Manrope;
    /* font-size: 45px; */
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 103.571% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .hero-product {
    color: #57411c;

    text-align: center;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  .hero-description {
    color: white;
    text-align: center;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
    width: 328px;
    text-shadow: 2px 2px 2px black;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 56px;
      line-height: 58px;
      width: 490px;
    }
    .hero-description {
      width: 349px;
    }
  }

  @media (min-width: 1020px) {
    /* height: calc(100vh - 5rem); */
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .container {
      justify-content: center;
      align-items: start;
    }

    h1 {
      text-align: left;
    }

    .hero-product {
      text-align: left;
    }

    .hero-description {
      text-align: left;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      margin-right: -100px;
    }
    .main-img {
      width: 100%;
      height: 350px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
  }
`

export default Hero
