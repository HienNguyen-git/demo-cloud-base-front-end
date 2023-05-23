import { NavLink } from "react-router-dom";


import classes from "./MainNavigation.module.css";


const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Intership Project</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Tell us your story
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default MainNavigation;