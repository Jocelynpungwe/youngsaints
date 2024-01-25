import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg1 from '../assets/young/hero-saint-3.JPG'
import aboutImg2 from '../assets/young/hero-saint-2.JPG'
import aboutImg3 from '../assets/young/product/product-bennie.JPG'
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg1} alt="picture of owners" />
        <article>
          <div className="title">
            <h2>About Yvng Saintss</h2>
            <div className="underline"></div>
          </div>
          <p>
            Our vision at Yvng Saints is to become the epitome of urban fashion,
            recognized globally for our fusion of street-inspired clothing with
            modern elegance. We aspire to be the go-to brand for individuals
            seeking not just trendy apparel but a lifestyle that celebrates
            individuality and authenticity. Through our innovative designs and
            commitment to quality, we envision inspiring a community of
            confident trendsetters who effortlessly embody the spirit of urban
            culture.
          </p>
          <h4>Our mission</h4>
          <p>
            Our vision at Yvng Saints is to become the epitome of urban fashion,
            recognized globally for our fusion of street-inspired clothing with
            modern elegance. We aspire to be the go-to brand for individuals
            seeking not just trendy apparel but a lifestyle that celebrates
            individuality and authenticity. Through our innovative designs and
            commitment to quality, we envision inspiring a community of
            confident trendsetters who effortlessly embody the spirit of urban
            culture.
          </p>
        </article>
        <article className="second-cont">
          <h4>Our story</h4>
          <p>
            Our vision at Yvng Saints is to become the epitome of urban fashion,
            recognized globally for our fusion of street-inspired clothing with
            modern elegance. We aspire to be the go-to brand for individuals
            seeking not just trendy apparel but a lifestyle that celebrates
            individuality and authenticity. Through our innovative designs and
            commitment to quality, we envision inspiring a community of
            confident trendsetters who effortlessly embody the spirit of urban
            culture.
          </p>
          <h4>Brand Values</h4>
          <p>
            Our vision at Yvng Saints is to become the epitome of urban fashion,
            recognized globally for our fusion of street-inspired clothing with
            modern elegance. We aspire to be the go-to brand for individuals
            seeking not just trendy apparel but a lifestyle that celebrates
            individuality and authenticity. Through our innovative designs and
            commitment to quality, we envision inspiring a community of
            confident trendsetters who effortlessly embody the spirit of urban
            culture.
          </p>
        </article>
        <article className="second-img-cont">
          <img src={aboutImg2} alt="picture of owners" />
        </article>
        <article className="three-img-cont">
          <img src={aboutImg3} alt="picture of owners" />
        </article>
        <article className="three-cont">
          <h4>Future Vision</h4>
          <p>
            Our vision at Yvng Saints is to become the epitome of urban fashion,
            recognized globally for our fusion of street-inspired clothing with
            modern elegance. We aspire to be the go-to brand for individuals
            seeking not just trendy apparel but a lifestyle that celebrates
            individuality and authenticity. Through our innovative designs and
            commitment to quality, we envision inspiring a community of
            confident trendsetters who effortlessly embody the spirit of urban
            culture.
          </p>
          <h4>Connect on Social Media</h4>
          <p>
            Our vision at Yvng Saints is to become the epitome of urban fashion,
            recognized globally for our fusion of street-inspired clothing with
            modern elegance. We aspire to be the go-to brand for individuals
            seeking not just trendy apparel but a lifestyle that celebrates
            individuality and authenticity. Through our innovative designs and
            commitment to quality, we envision inspiring a community of
            confident trendsetters who effortlessly embody the spirit of urban
            culture.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  .second-cont {
    order: 1;
  }

  .second-img-cont {
    order: 0;
  }

  .three-cont {
    order: 3;
  }
  .three-img-cont {
    order: 2;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 1rem auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .second-cont,
    .second-img-cont,
    .three-cont,
    .three-img-cont {
      order: 0;
    }
  }
`
export default AboutPage
