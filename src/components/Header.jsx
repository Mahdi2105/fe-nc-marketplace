import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NC MARKETPLACE</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/users">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
