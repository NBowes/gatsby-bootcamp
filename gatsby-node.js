const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
  const { createNodeField } = actions

  if(node.internal.type === 'MarkdownRemark'){
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const markdownTemplate = path.resolve('./src/templates/markdownTemplate.js')
  const contentfulTemplate = path.resolve('./src/templates/contentfulTemplate.js')

  const response = await graphql(`
    query {
      allMarkdownRemark{
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)


  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: markdownTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

  response.data.allContentfulBlogPost.edges.forEach(cPost => {
    createPage({
      component: contentfulTemplate,
      path: `/blog/${cPost.node.slug}`,
      context: {
        slug: cPost.node.slug
      }
    })
  })
}