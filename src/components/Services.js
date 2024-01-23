import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import logo from '../assets/young/logo/logo-name-brown-seethrough.PNG'
import vid from '../assets/young/youngsts.MOV'
import FadeIn from '../components/FadeIn'

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <div>
            <img src={logo} alt="logo" />
            <p>
              Young Saint, born from the vibrant streets and the spirit of
              contemporary urban culture, embodies the essence of youthful
              expression. Our brand celebrates individuality, blending
              street-inspired fashion with a touch of modern elegance. Each
              piece, from our signature hoodies to our stylish caps, reflects
              the dynamic energy and boldness of today's trendsetters. With a
              commitment to quality, comfort, and design, Young Saint embraces
              the fusion of street style and sophistication, empowering the
              modern-day saints to make a statement while staying true to their
              authentic selves.
            </p>
          </div>

          <div className="video-div">
            <video src={vid} width="100%" height="300" controls="controls" />
          </div>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 150px;
    height: 50px;
  }
  h3,
  h4 {
    /* color: var(--clr-primary-1); */
    color: white;
  }
  padding: 5rem 0;

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
export default Services
