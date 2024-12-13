import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <h1>Our Website</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="users">Users</Link>
                <Link to="contact">Contact Us</Link>
            </div>
        </div>
    );
};

export default Header;