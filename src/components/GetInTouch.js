import React from 'react'
import styled from 'styled-components'
import { BsPhone } from 'react-icons/bs'
import { BsEnvelope } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import instagramImage from '../assets/young/instagram-removebg-preview.png'

const GetInTouch = () => {
  return (
    <Wrapper>
      <div className="section-center services-center">
        <article className="service">
          <span className="icon">{<BsPhone />}</span>
          <h4>Phone</h4>
          <p className="disc-header">
            Give us a call or Reach out to us via WhatsApp at
          </p>
          <p>+123456789 Yvng Saints</p>
          <p>+123456789 Grace</p>
          <p>+123456789 Ray</p>
        </article>
        <article className="service">
          <span className="icon">{<BsEnvelope />}</span>
          <h4>Email</h4>
          <p className="disc-header">Feel free to contact us via email at:</p>
          <p>YoungSaint@gmail.com</p>
          <p>grace@gmail.com</p>
          <p>Rofra@gmail.com</p>
        </article>
        <article className="service">
          <span className="icon">{<FaInstagram />}</span>
          <h4>Follow</h4>
          <p>Yvng Saints Instagram</p>
          <a href="https://www.instagram.com/yvng_saints/">
            <img className="ig-image" src={instagramImage} alt="" />
          </a>

          <p>Grace Instagram</p>
          <a href="https://www.instagram.com/__gracie__1206/">
            <img className="ig-image" src={instagramImage} alt="" />
          </a>

          <p>Ray Instagram</p>
          <a href="https://www.instagram.com/its_la_ray/">
            <img className="ig-image" src={instagramImage} alt="" />
          </a>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .ig-image {
    height: 30px;
    width: 30px;
  }

  h3,
  h4 {
    /* color: var(--clr-primary-1); */
    color: white;
  }
  padding: 5rem 0;

  .disc-header {
    color: white;
  }

  /* background: var(--clr-primary-10); */
  background: black;

  .video-div {
    border: #57411c 1px solid;
  }

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    /* color: var(--clr-primary-3); */
    color: white;
    opacity: 0.75;
  }
  .media-div {
    display: flex;
    justify-content: space-between;
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    /* background: var(--clr-primary-7); */
    background: #57411c;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      /* color: var(--clr-primary-2); */
      color: white;
      opacity: 0.75;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 1020px) {
    .header {
      display: grid;
      grid-column-gap: 10px;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1020px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  /* @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  } */
`

export default GetInTouch
