import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import React from "react";
import {
  AppstoreAddOutlined,
  UserAddOutlined,
  CreditCardOutlined,
  CalendarOutlined,
  LogoutOutlined,
} from "@ant-design/icons"; // Import the required Ant Design icons

function SideMenu() {
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    navigate(key);
  };

  return (
    <div className="SideMenu">
      <Menu className="Menuitem active" onClick={(item) => handleMenuClick(item.key)}>
        {[
          {
            label: "My Task",
            icon: <AppstoreAddOutlined />,
            key: "/",
          },
          {
            label: "My Profile",
            key: "/MyProfile",
            icon: <UserAddOutlined />,
          },
          {
            label: "New Task",
            key: "/NewTask",
            icon: <CreditCardOutlined />,
          },
          {
            label: "Today",
            key: "/Today",
            icon: <CalendarOutlined />,
          },
          {
            label: "Logout",
            key: "/Logout",
            icon: <LogoutOutlined />,
          },
        ].map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
      <div>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="/MyProfile">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/Logout">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
