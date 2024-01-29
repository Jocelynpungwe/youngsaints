import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg1 from '../assets/young/logo/logo-brown-black-background.PNG'
import aboutImg2 from '../assets/young/logo/logo-black-brown-background.PNG'
import aboutImg3 from '../assets/young/benny-2.JPG'
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
            <h2>About yvng saints</h2>
            <div className="underline"></div>
          </div>
          <p>
            At YVNG Saint, our vision is to seamlessly integrate spirituality
            into contemporary fashion, creating a space where faith becomes a
            vibrant and celebrated aspect of personal style. We aspire to
            empower individuals to express their devotion boldly through
            thoughtfully crafted, religious-inspired apparel, fostering a
            community that embraces both faith and flair. With a commitment to
            quality and a reverence for sacred symbols, we envision YVNG Saint
            as a conduit for individuals to wear their beliefs with pride,
            making a statement that transcends fashion and resonates with the
            soul. Join us on this journey where fashion meets devotion, and
            together, let's redefine the intersection of faith and style.
          </p>
        </article>
        <article className="second-cont">
          <h4>Our story</h4>
          <p>
            Two young ladies seeking to contribute to thier community in a way
            that they find effective, bold, and engaging! Fashion is a global
            platform that people from every race, culture and religion can
            connect! That is what we seek to achieve as yvng saints. We are
            young, valued and gifted individuals and we are determined to bring
            these values to shine in every generation that wears any of our
            fashion creations
          </p>
          <h4>Brand Values</h4>
          <p>
            YVNG Saint epitomizes the fusion of faith and fashion, crafting
            high-quality products that authentically express spirituality. With
            a commitment to inclusivity and diversity, we empower individuals to
            proudly showcase their beliefs. Our designs, marked by meticulous
            craftsmanship, transcend fleeting trends, becoming timeless
            expressions of faith. Beyond fashion, YVNG Saint is a community that
            values connections and upholds ethical practices. We seek to make a
            positive impact through both our products and contributions to
            charitable initiatives. Innovation remains at our core as we
            navigate the dynamic intersection of fashion and faith. YVNG Saint
            is more than apparel; it's a movement celebrating the enduring
            connection between style and spirituality.
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
            As we gaze into the future, YVNG Saint envisions evolving into a
            global hub for individuals seeking a harmonious blend of faith and
            fashion. We aspire to expand our product offerings, introducing
            innovative designs that resonate with diverse spiritual journeys.
            Our commitment to sustainability will deepen, embracing eco-friendly
            practices throughout our supply chain. YVNG Saint aims to foster an
            even more inclusive community, connecting like-minded individuals
            worldwide and celebrating the beauty of cultural diversity.
            Collaborations with emerging artists and influencers will further
            enrich our creative landscape, ensuring our designs remain at the
            forefront of meaningful expression. With a growing emphasis on
            technology, we envision enhancing our online platform to offer
            immersive experiences and personalized interactions for our valued
            community. Through these advancements, YVNG Saint looks forward to
            shaping the future of spiritual fashion, leaving a lasting imprint
            on the intersection of faith and style.
          </p>
          <h4>Connect on Social Media</h4>
          <p>
            Embark on a journey where faith meets fashion as we invite you to
            join YVNG Saint's vibrant community across social media platforms.
            Dive into a world where spiritual expression intertwines seamlessly
            with contemporary style. Follow us for an immersive experience,
            where we share thought-provoking content, exclusive
            behind-the-scenes glimpses, and showcase our meticulously crafted,
            religious-inspired designs.
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
