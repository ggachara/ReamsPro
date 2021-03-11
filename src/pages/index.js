import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="text-center mt-2">
        <Link className="text-center text-3xl font-semibold" to="/about">
          ReamsPro Manual Home
        </Link>
        <h3 className="text-gray text-md">
          Your Guide to grasping this barakoa
        </h3>
        <h4 className="text-gray">{data.allMdx.totalCount} Articles</h4>
        <div className="grid grid-cols-4 gap-2 my-6 mx-2">
          {data.allMdx.edges.map(({ node }) => (
            <Link to={node.frontmatter.slug}>
              <div
                className="border border-1 border-gray-300 shadow-md border-opacity-50 h-28 text-center rounded-md pt-3"
                key={node.id}
              >
                <div className="inline-block">
                  <h3 className=" text-xl text-gray-700 font-semibold hover:text-2xl">
                    {node.frontmatter.title}{" "}
                  </h3>
                  <h4 className=" text-base text-gray-500 font-medium pt-1 hover:text-sm">
                    {node.frontmatter.description}{" "}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            description
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
