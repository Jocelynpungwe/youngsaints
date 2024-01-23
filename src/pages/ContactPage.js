import React from 'react'
import { Contact, PageHero } from '../components'
import GetInTouch from '../components/GetInTouch'

const ContactPage = () => {
  return (
    <>
      <PageHero title="Contact" />
      <GetInTouch />
      <Contact />
    </>
  )
}

export default ContactPage
