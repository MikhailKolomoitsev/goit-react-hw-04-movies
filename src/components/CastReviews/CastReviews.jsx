import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function CastReviews({ url, location }) {
  //   console.log('CastReviews', url, location)
  return (
    <div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location.state.from,
              },
            }}
            className="add_link"
            activeClassName="active_link"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location.state.from,
              },
            }}
            className="add_link"
            activeClassName="active_link"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
CastReviews.propTypes = {
  value: PropTypes.string,
  location: PropTypes.object,
}
