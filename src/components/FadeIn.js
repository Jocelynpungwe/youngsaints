import React from 'react'
import styled from 'styled-components'

function FadeIn(props) {
  const [isVisible, setVisible] = React.useState(true)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])
  return (
    <Wrapper>
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 0.6s ease-out, transform 1.2s ease-out;
    will-change: opacity, visibility;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`

export default FadeIn
