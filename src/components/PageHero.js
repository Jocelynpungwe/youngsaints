import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product, category }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home </Link> / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primary-blackish);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #57411c;
  color: var(--actual-white);
  a {
    color: var(--primary-chocolate);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--primary-chocolate);
  }
`

export default PageHero
