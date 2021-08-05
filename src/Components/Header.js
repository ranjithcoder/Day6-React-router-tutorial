import { Link } from "react-router-dom"
import './Header.css'
export const Header = () => {
    return (
      <div>
        <h1> React Router Tutorial </h1>
        <ul className="nav">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
        </ul>
      </div>
    )
}
