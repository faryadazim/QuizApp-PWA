import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Step } = Steps;
const StepShow = () => {
  const [progress, setprogress] = useState(<LoadingOutlined />);
  return <>
    <div>
      <Steps>
        <Step status="wait" title="Start" icon={progress || UserOutlined} />
        <Step status="wait" title="Test" icon={<UserOutlined />} />
        <Step status="wait" title="Finish" icon={< UserOutlined />} />
        <Step status="wait" title="Certification" icon={<SmileOutlined />} />

      </Steps></div>
  </>;
};

export default StepShow;
