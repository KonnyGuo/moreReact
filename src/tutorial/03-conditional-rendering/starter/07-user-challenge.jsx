import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // connect to db or api. If connection is good we get user credentials for state value
    setUser({ name: "john" });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4> hello {user.name} </h4>
          <button className="btn" onClick={logout}>
            logout button
          </button>
        </div>
      ) : (
        <div>
          <h4> please login </h4>
          <button className="btn" onClick={login}>
            login button
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
