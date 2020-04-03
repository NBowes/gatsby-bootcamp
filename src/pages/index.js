import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm Nathen. I'm new to React + Gatsby so I'm looking forward to this bootcamp.</h2>
      <p>Need to get in touch? <Link to="/contact"> Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage