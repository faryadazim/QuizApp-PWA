import { Spin, Space } from 'antd';
 
import React from 'react';

const Loading = () => {
  return <div><Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>,</div>;
};

export default Loading;
