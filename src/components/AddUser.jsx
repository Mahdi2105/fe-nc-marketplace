import { postUser } from "../../api";
import TextField from "@mui/material/TextField";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const AddUser = () => {
  const { setUser } = useContext(UserContext);
  function onSubmitUser(event) {
    event.preventDefault();

    console.log(event);
    const userName = event.target[0].value;
    const userAvatarUrl = event.target[2].value;

    const userObject = {
      username: userName,
      avatar_url: userAvatarUrl,
    };

    postUser(userObject).then((result) => {
      setUser(userObject);
    });
  }

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={onSubmitUser}>
        <TextField
          name="user-name"
          label="Username"
          variant="outlined"
          required
        />
        <TextField
          name="user-avatar-url"
          label="Avatar URL"
          variant="outlined"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
