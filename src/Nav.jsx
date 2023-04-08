import { Link } from "react-router-dom";
import './Nav.scss';
function Nav() {
    return (
        <ul>
            <li>
                <Link to={`classes`}>Classes</Link>
            </li>
            <li>
                <Link to={`students`}>Students</Link>
            </li>
            <li>
                <Link to={`groups`}>Groups</Link>
            </li>
        </ul>
    );
};
export default Nav;