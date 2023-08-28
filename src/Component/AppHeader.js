import { BellOutlined, MailOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";

function AppHeader() {
    return ( 
      <div className="App-header">
      <div>
      <img src="tasks.png" style={{ width: "40px", height:"40px"}} alt="Task Planner Logo" />
      </div>
      <Typography.Title>Task Planner</Typography.Title>
      <Space>
      <Badge count={10} dot>
      <MailOutlined style={{fontSize : 24}}></MailOutlined>
      </Badge>
      <Badge count={20}>
      <BellOutlined style={{fontSize : 24}}></BellOutlined>
      </Badge>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
       <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
       <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>
      </Space>
      </div>
    );
  }
  
  export default AppHeader;
  