import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-black">
    <div className="">
      <h1>
        <Link to="/" className="text-lg">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
