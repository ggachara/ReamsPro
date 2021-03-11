import { Link } from "gatsby"
import React from "react"

export default function Header(props) {
  return (
    <nav class="bg-green-500">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-20">
          <div class="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between ">
            <div class="flex-shrink-0 flex  items-center">
              <Link to="/">
                <h2 class="text-2xl font-medium leading-7 text-white sm:text-3xl sm:truncate">
                  ReamsPro
                </h2>
              </Link>
              {/* <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> */}
            </div>
            <div class="flex col-span-8 sm:col-span-8 focus w-1/2">
              <input
                type="text"
                name="search"
                id="search"
                autocomplete="search"
                placeholder="Search the docs"
                class="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full shadow-sm sm:text-lg border-gray-300 px-2 rounded-md"
              />
            </div>
            <div class="hidden sm:block sm:ml-6 justify-end  ">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Login
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Website
          </a>
        </div>
      </div>
    </nav>
  )
}

// <div className="border-2 border-black h-12 px-3">
//   <h1>Hello {props.headertext} Gatsby World</h1>
//   <em>this is from the header component</em>
// </div>
