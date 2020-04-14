import React from 'react'
import { graphql } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: { eq: $slug }} ){
      frontmatter{
        title
        date(formatString:"ddd MMMM Do, YYYY")
      }
      html
    }
  }
`

const MarkdownTemplate = (props) => {
  return (
    <Layout>
    <Head title={props.data.markdownRemark.frontmatter.title}/>
    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
    <p>{props.data.markdownRemark.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default MarkdownTemplate