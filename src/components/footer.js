import React from "react"

export default function Footer() {
  return (
    <>
      <footer>
        <nav class="bg-gray-700 inset-x-0 bottom-0">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between ">
                <div class="flex-shrink-0 flex items-center">
                  <h2 class="text-xl font-medium leading-7 text-white sm:text-xl sm:truncate">
                    ReamsPro Manual
                  </h2>
                </div>
                <div class="flex-shrink-0 flex items-center">
                  <h2 class="text-xl font-medium leading-7 text-white sm:text-sm sm:truncate">
                    &#169; Brainsoft Technologies 2020
                  </h2>
                </div>
                <div class="hidden sm:block sm:ml-6 justify-end  ">
                  <div class="flex space-x-4">
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Github
                    </a>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Contact Us
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
      </footer>
    </>
  )
}
