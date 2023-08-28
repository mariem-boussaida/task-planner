import React from 'react';
import { Typography, Tooltip } from 'antd';
import { SettingOutlined } from "@ant-design/icons";
import thmeSettings from './themeSettings';
function MyTask() {
  return (
    
       <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Typography.Title level={3}>My Task</Typography.Title>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className=" position-fixed end-0 bottom-0 me-4 mb-4" style={{ zIndex: "1000" }}>
            <Tooltip title="Settings" placement="top">
              <button
                type="button"
                className="text-3xl p-3 hover:bg-light-gray text-white"
                style={{ background: 'blue', borderRadius: '100%' }}
              >
                <SettingOutlined />
                </button>
                </Tooltip>
                <thmeSettings/>
          </div>
        </div>
        </div>
  );
}

export default MyTask;
