import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx
  // let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div className="flex space-x-4 h-full bg-gray-100">
        {" "}
        <div className="border-2 border-black items-center w-1/4 px-4 mt-4"></div>
        <div className="border-2 border-black w-2/4 items-cente px-3 py-3 mt-4">
          <h1 className="text-3xl font-semibold pt-2 text-center">
            {frontmatter.title}
          </h1>
          <h1 className="text-lg italic font-normal py-2 text-center">
            {frontmatter.description}
          </h1>
          <div className="text-lg font-medium text-justify tracking-wide leading-relaxed list-decimal" />
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="border-2 border-black w-1/4 items-center mt-4">
          <h2>On this page</h2>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        # featuredImage {
        #   childImageSharp {
        #     fluid(maxWidth: 800) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
    }
  }
`
