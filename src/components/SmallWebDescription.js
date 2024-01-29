import React from 'react'
import styled from 'styled-components'

const SmallWebDescription = () => {
  return (
    <Wrapper className="section-center">
      <div className="audio-headset-product">
        <div className="audio-product-background"></div>
        {/* <img src={image} alt="person with headphones on" /> */}
        <div className="project-container">
          <h2>
            Creators of{' '}
            <span className="span-line">
              {' '}
              <span className="span-color">yvng saints</span> Brand
            </span>
          </h2>
          <p>
            Two young ladies seeking to contribute to thier community in a way
            that they find effective, bold, and engaging! Fashion is a global
            platform that people from every race, culture and religion can
            connect! That is what we seek to achieve as yvng saints. We are
            young, valued and gifted individuals and we are determined to bring
            these values to shine in every generation that wears any of our
            fashion creations
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  padding: 100px 0;
  h2 {
    margin: 25px 0;
    color: #000;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }

  .span-color {
    color: #d87d4a;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }

  p {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    text-transform: none;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .span-line {
      display: block;
    }
  }

  @media (min-width: 1020px) {
    text-align: left;
    .span-color,
    h2 {
      font-size: 40px;

      line-height: 44px; /* 110% */
      letter-spacing: 1.429px;
      text-transform: uppercase;
    }
    .span-line {
      display: inline-block;
    }
    .audio-headset-product {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
      .project-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        order: -1;
        height: 400px;
      }
    }
  }
`

export default SmallWebDescription
