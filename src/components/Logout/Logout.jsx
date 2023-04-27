import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authService";

const Logout = () => {
  const navigate = useNavigate();
  const { userLogout } = useContext(AuthContext);
  useEffect(() => {
    userLogout();
    navigate("/");
    // authService.logout()
    //   .then(() => {
    //     // userLogout();
    //     // navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     navigate("/error");
    //   });
  });

  return null;
};

export default Logout;
