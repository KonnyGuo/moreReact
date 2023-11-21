import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setAlert] = useState(false);

  const toggleAlert = () => {
    if (showAlert) {
      setAlert(false);
      return;
    }

    setAlert(true);
  };

  return (
    <div>
      <button className="" onClick={toggleAlert}>
        {" "}
        toggle button{" "}
      </button>
      <Alert />
    </div>
  );
};

const Alert = () => {
  return (
    <div className="alert alert-danger">
      <h2>hello world</h2>
    </div>
  );
};

export default ToggleChallenge;
