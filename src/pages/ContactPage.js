import React,{useEffect} from 'react'
import { Contact, PageHero } from '../components'
import GetInTouch from '../components/GetInTouch'

const ContactPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <>
      <PageHero title="Contact" />
      <GetInTouch />
      <Contact />
    </>
  )
}

export default ContactPage
