import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const displayInformation = (e) => {
    e.preventDefault();
    setFormName(name);
    setFormEmail(email);
  };

  const deleteInformation = () => {
    setFormName("");
    setFormEmail("");
  };

  return (
    <div className="App">
      <form>
        <div className="title">
          <h1>Username</h1>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="title">
          <h1>Email</h1>
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="button" onClick={displayInformation}>
          Submit Info
        </button>
        <button className="button" onClick={deleteInformation}>
          Delete Info
        </button>
      </form>
      <div>
        <h1>Name : {formName}</h1>
        <h1>Email : {formEmail}</h1>
      </div>
    </div>
  );
}

export default App;
