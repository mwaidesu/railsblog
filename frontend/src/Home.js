import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      {/* <Link to ="/posts">Parent</Link> */}
    </div>
  );
};
export default Home;
