import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="h-32 flex-grow px-4">
        <Link to="/">Home</Link>
        <p className="">{data.site.siteMetadata.title}New Model Out there</p>
        <img
          className="w-auto"
          src="https://source.unsplash.com/random/400x200"
          alt=""
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
