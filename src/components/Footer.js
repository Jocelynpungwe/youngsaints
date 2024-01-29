import React from 'react'
import styled from 'styled-components'
import { links } from '../utils/constants'
import { Link } from 'react-router-dom'
import imageSrc from '../assets/young/logo/logo-name-brown-seethrough.PNG'
import instagramImage from '../assets/young/instagram-removebg-preview.png'

const Footer = () => {
  return (
    <Container>
      <footer className="section-center">
        <div className="project-container">
          <div className="logo-footer-container">
            <img src={imageSrc} alt="" />
            <div className="link">
              <ul className="nav-links">
                {links.map((link) => {
                  const { id, text, url } = link
                  return (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <p className="footer-paragraph">
            Empower your style with YVNG Saints - Where fashion meets faith.
          </p>
          <div className="copyright-container">
            <p className="copyright">Copyright 2020. All Rights Reserved</p>

            <a href="https://www.instagram.com/yvng_saints/">
              <img className="ig-image" src={instagramImage} alt="" />
            </a>
          </div>
        </div>
      </footer>
      {/* <h5>
        &copy; {new Date().getFullYear()}
        <span> JocesTech </span>
      </h5>
      <h5>All rights reserved</h5> */}
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  text-align: center;
  color: var(--secondy-chocolate);
  /* height: 654px; */
  flex-shrink: 0;
  padding: 100px 0;
  img {
    width: 150px;
    height: 50px;
  }
  .ig-image {
    height: 40px;
    width: 40px;
  }

  p {
    color: var(--secondy-chocolate);
  }

  .footer-link {
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: var(--secondy-chocolate);
  }

  .footer-paragraph,
  .copyright {
    font-size: 15px;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }

  .footer-paragraph {
    margin: 25px 0;
    font-weight: 500;
    max-width: 540px;
  }

  .copyright {
    font-weight: 700;
    margin-bottom: 25px;
  }

  .link {
    margin-top: 30px;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    /* li {
      margin: 0 0.5rem;
    } */
    a {
      /* color: var(--clr-grey-3); */
      color: var(--secondy-chocolate);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      /* padding: 0.5rem; */
      &:hover {
        border-bottom: 2px solid var(--primary-chocolate);
      }
    }
  }

  @media (min-width: 550px) {
    align-items: start;
    text-align: left;
    .nav-links {
      flex-direction: row;
      justify-content: start;
      margin-top: 15px;
    }

    .link {
      margin-top: 0;
    }
  }

  @media (min-width: 1020px) {
    height: 365px;
    .logo-footer-container {
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      margin-top: 0;
    }
  }

  /* height: 5rem;
  
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  } */
  /* @media (min-width: 776px) {
    flex-direction: row;
  } */
`

export default Footer
