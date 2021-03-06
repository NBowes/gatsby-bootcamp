import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact'/>
      <h1>Contact Us</h1>
      <p>Email: nathen-testing@test.com</p>
      <p>Twitter: <a href='https://twitter.com/Nathen_B' target='_blank' rel='noopener noreferrer'>@Nathen_B</a></p>
    </Layout>
  )
}

export default ContactPage