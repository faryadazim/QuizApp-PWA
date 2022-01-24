import React, { useState } from 'react';
import './App.css';
import StepShow from './components/StepShow'
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
} from 'antd';
const { Option } = Select;
import QuestionCard from './components/QuestionCard';

function App() {
  const [isGameOver, setIsGameOver] = useState(true);

  const handleButton = () => {
    console.log("clicked");
    setIsGameOver(!isGameOver)
  }

  return (
    <>
      <div className="bg-image"></div>
      <div className="App">
        <div className="progress">
          <StepShow />
        </div>
        <div className="form-start">
          {isGameOver ? <div className="formbox">
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              className='text-center' >
              <Form.Item  >
                <Input className='tranparent color-light' placeholder='Enter Your Name' />
              </Form.Item> <Form.Item  >
                <InputNumber className='tranparent color-light' placeholder='How Much Question' />
              </Form.Item>
              <Form.Item className='tranparent color-light' >
                <Select
                  // showSearch
                  dropdownStyle={{ backgroundColor: 'grey' }}
                  placeholder="Select Difficulty Level"
                  optionFilterProp="children"
                  className='center' >
                  <Option value="easy" className='tranparent'
                    style={{ backgroundColor: 'green', with: '50px ' }} >Easy</Option>
                  <Option value="medium" className='tranparent'
                    style={{ backgroundColor: 'green', with: '50px ' }} >Medium</Option>
                  <Option value="hard" className='tranparent'
                    style={{ backgroundColor: 'green', with: '50px ' }} >Hard</Option>

                </Select>,
              </Form.Item>
              <Button type="primary" className='selector' onClick={handleButton} >Start Quiz</Button>
            </Form>
          </div> : <QuestionCard />}
        </div>
      </div>
    </>
  );
}

export default App;
