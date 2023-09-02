import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import {
  AppstoreAddOutlined,
  UserAddOutlined,
  CalendarOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActionCreators";

function SideMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (key) => {
    if (key === "/Logout") {
      dispatch(logout());
    } else {
      history.push(key);
      onClose(); // Close the sidebar when an item is clicked
    }
  };

  const menuItems = [
    {
      label: "Tasks",
      icon: <AppstoreAddOutlined />,
      key: "/TaskPlanner",
    },
    {
      label: "My Profile",
      key: "/MyProfile",
      icon: <UserAddOutlined />,
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
  ];

  return (
      <div className="SideMenu">
        <MenuOutlined className="menu-icon" onClick={showDrawer} />
        <Drawer
            title="Menu"
            placement="left"
            onClose={onClose}
            visible={visible}
            width={200}
        >
          <Menu
              theme="dark"
              mode="vertical"
              onClick={(item) => handleMenuClick(item.key)}
              selectedKeys={[]}
          >
            {menuItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </div>
  );
}

export default SideMenu;
