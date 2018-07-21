import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {MuiThemeProvider} from "material-ui";
import NavLink from "react-router-dom/es/NavLink";

const SideBar = () => (
  <MuiThemeProvider>
    <Drawer width={200} open={true}>
      <div className="detail__sideMenu">
        <MenuItem className="detail-sideMenu">
          <NavLink className="dashboard__link" activeClassName="is-active" to="/exploration" exact={true}>EXPLORATION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/revolution" exact={true}>REVOLUTION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/constitution" exact={true}>CONSTITUTION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/colonization" exact={true}>COLONIZATION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/earlyRepublic" exact={true}>EARLY REPUBLIC</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/jackson" exact={true}>JACKSON</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/indianRevolution" exact={true}>INDIAN REVOLUTION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/westExpansion" exact={true}>WEST EXPANSION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/sectionalism" exact={true}>SECTIONALISM</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/civilWar" exact={true}>CIVIL WAR</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="dashboard__link" activeClassName="is-active" to="/reconstruction">RECONSTRUCTION</NavLink>
        </MenuItem>
      </div>
    </Drawer>
  </MuiThemeProvider>
);

export default SideBar