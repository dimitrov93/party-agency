import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-auto">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#d0a977", textDecoration: "underline" }}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;