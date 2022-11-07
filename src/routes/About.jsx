import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <i
        onClick={() => navigate(-1)}
        className="text-black fa-solid fa-circle-left text-3xl absolute top-4 left-4 cursor-pointer"
      ></i>
      <h1>My name is Ricky. I am the creator of this site.</h1>
      <ol>
        <li>
          I work as a bartender at a restaurant. I did not go to bartending
          school and I have not been formally trained as a bartender.
        </li>
        <li>
          Some of the recipes on this site are the original formulas, and others
          are far from that; all are my preferred recipes.
        </li>
        <li>The purposes of this site are:</li>
        <ol>
          <li>
            To serve as an educational web development project (I am studying to
            become a front-end web developer).
          </li>
          <li>
            To serve as a database for all the recipes and information I learn,
            as I learn it.
          </li>
          <li>To share those recipes and information with others.</li>
        </ol>
        <li>Cheers!</li>
      </ol>
    </div>
  );
};

export default About;
