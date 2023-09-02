import { BellOutlined, MailOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";
import "./AppHeader.css"; // Import your custom CSS for styling

function AppHeader() {
  return (
      <div className="app-header">
        <div>
          <img src="tasks.png" className="logo" alt="Task Planner Logo" />
        </div>
        <Typography.Title level={3} className="title text-white">
          Task Planner
        </Typography.Title>
        <Space size="large" className="icons">
          <Badge count={10} dot>
            <MailOutlined className="icon" />
          </Badge>
          <Badge count={20}>
            <BellOutlined className="icon" />
          </Badge>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              fill="currentColor"
              className="person-icon"
              viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </Space>
      </div>
  );
}

export default AppHeader;
