import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      Email:
      <input
        type="text"
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <br />
      Password:
      <input
        type="text"
        name="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Form;
