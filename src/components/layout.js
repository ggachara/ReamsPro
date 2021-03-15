import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <MDXProvider
      components={{
        p: props => (
          <p {...props} className="font-normal text-lg text-gray-600 my-3" />
        ),
        img: props => (
          <img
            {...props}
            className="container border-2 border-green-400 my-4 block"
          />
        ),
        strong: props => <strong {...props} className="font-semibold" />,
        hr: props => <hr {...props} className="border-2 gray-800 mt-2" />,
        ul: props => <ul {...props} className="block py-1" />,
        // ol: props => <ol {...props} className="block text-3xl list-decimal" />,
        li: props => (
          <li
            {...props}
            className="block text-lg font-seminormal text-gray-900 list-decimal"
          />
        ),
        h1: props => (
          <h1 {...props} className="text-3xl font-semibold text-gray-900" />
        ),
        h2: props => (
          <h2
            {...props}
            className="text-2xl my-3 text-center font-semibold text-gray-900 my-2"
          />
        ),
        h3: props => (
          <h3
            {...props}
            className="text-2xl my-3 text-center font-semibold text-gray-900"
          />
        ),
      }}
    >
      <div className="flex flex-col flex-wrap">
        <Header />
        {children}
        <Footer className="inset-x-0 bottom-0" />
      </div>
    </MDXProvider>
  )
}
