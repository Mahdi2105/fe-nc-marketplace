import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const UserCard = ({ user }) => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(user);
  };
  return (
    <div key={user.username}>
      <h3>{user.username}</h3>
      <img src={user.avatar_url} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserCard;
