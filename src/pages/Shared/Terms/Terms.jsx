import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Ours Terms and conditions</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        ducimus excepturi voluptate, quasi aspernatur repellendus rerum soluta
        tenetur, beatae corporis doloremque optio expedita placeat quae dolore
        eligendi eveniet quis est deserunt! Inventore beatae illo odit
        architecto eum facere quia neque modi soluta, dolor eius optio!
      </p>
      <p>
        Go Back To <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
