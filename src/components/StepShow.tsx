import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;
const StepShow = () => {
  return <>
  <div>
    <Steps>
      <Step status="process" title="Start" icon={<UserOutlined />} />
      <Step status="wait" title="Test" icon={<SolutionOutlined />} />
      <Step status="wait" title="Finished" icon={<LoadingOutlined />} />
      <Step status="wait" title="Certification" icon={<SmileOutlined />} />

    </Steps></div>
  </>;
};

export default StepShow;
