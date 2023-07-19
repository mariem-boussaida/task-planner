import {AppstoreOutlined, CalendarOutlined, CreditCardOutlined, UserAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";

function SideMenu() {
    return (
      <div className="SideMenu">
      <Menu
      onClick={(item)=>{
        // item.key
      }}
       items={[
        {
          label:"My Task",
          icon:<AppstoreOutlined/>,
          key:"/",
        },
        {
          label:"My Profile",
          icon:<UserAddOutlined/>,
          key:"/My Profile",
        },
        {
          label:"Today",
          icon:<CalendarOutlined/>,
          key:"/Today",
        },
        {
          label:"New task",
          icon:<CreditCardOutlined/>,
          key:"/New task",
        },
       ]}
      
      
      ></Menu>
      
      </div>
    );
  }
  
  export default SideMenu;
  