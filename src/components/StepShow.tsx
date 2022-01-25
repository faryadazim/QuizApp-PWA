import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Spin } from 'antd';

const { Step } = Steps;
const StepShow = ({progress}:any) => {
 const loading =(<LoadingOutlined />)
  return <>
    <div>
      <Steps>
        <Step status="wait" title="Start" icon={ progress==='start'?  <Spin  /> : <UserOutlined />} />
  <Step status="wait" title="Test" icon={ progress==='test'?  <Spin  /> :<SolutionOutlined />} />
         <Step status="wait" title="Finish" icon={<SmileOutlined />} />

      </Steps></div>
  </>;
};

export default StepShow;
