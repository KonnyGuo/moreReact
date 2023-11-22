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
      {/* method 1 */}
      {/* <button className="btn" onClick={toggleAlert}>
        {" "}
        toggle button{" "}
      </button>
      {showAlert && <Alert />} */}
      {/* method 2 */}
      <button
        className="btn"
        onClick={() => {
          setAlert(!showAlert);
        }}
      >
        {" "}
        toggle button 2
      </button>
      {showAlert && <Alert />}
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
