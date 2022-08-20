import React from 'react';
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from "./SinglePage"
const About = () => {
  console.log(useRouteMatch())

  const { url, path } = useRouteMatch()
Then, update the return statement so you have:
return (
  <div>
    <ul>
      <li>
        <Link to={`${url}/about-app`}>About App</Link>
      </li>
      <li>
        <Link to={`${url}/about-author`}>About Author</Link>
      </li>
    </ul>
    <Route path={`${path}/:slug`}>
      <SinglePage />
    </Route>
  </div>
)
  return (
    ...
  );
};
export default About
