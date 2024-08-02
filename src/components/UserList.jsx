import { useEffect, useState } from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((userData) => {
      setUsers(userData);
    });
  }, []);

  return (
    <div>
      <Link to="/add-user">
        <Button variant="contained">Add User</Button>
      </Link>
      {users.map((user) => {
        return <UserCard key={user.username} user={user} />;
      })}
    </div>
  );
};

export default UserList;
