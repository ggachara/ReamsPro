import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <MDXProvider
      components={{
        p: props => (
          <p {...props} className="font-normal text-lg text-gray-600" />
        ),
        img: props => <img {...props} className="my-14" />,
        // ul: props => <ul {...props} className="block" />,
        // ol: props => <ol {...props} className="block" />,
        li: props => <li {...props} className="block text-bold" />,
        h1: props => (
          <h1 {...props} className="text-3xl font-semibold text-gray-900" />
        ),
        h2: props => (
          <h2
            {...props}
            className="text-2xl my-3 text-center font-semibold text-gray-900"
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
