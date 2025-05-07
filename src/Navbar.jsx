import {Link} from "react-router-dom";

function Navbar() {
  return <div>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about</li>">About</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
    </nav>
  </div>
}

export default Navbar;