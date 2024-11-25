import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem>
          <div className="flex items-center gap-4">
            <img
              src="https://api.iconify.design/material-symbols:developer-board.svg?color=%23888888"
              alt="Developer Board Icon"
              style={{ width: "24px", height: "24px" }}
            />
            <h1 className="font-semibold">ADMIN PANEL</h1>
          </div>
        </MenuItem>
        <MenuItem component={<NavLink to="/" />}>Home</MenuItem>
        <SubMenu label="Charts">
          <MenuItem component={<NavLink to="/documentation" />}>
            Pie charts
          </MenuItem>
          <MenuItem component={<NavLink to="/home" />}> Line charts </MenuItem>
        </SubMenu>
        <MenuItem component={<NavLink to="/users" />}>Users</MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
