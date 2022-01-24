import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
import StepShow from './components/StepShow'

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch, 
} from 'antd';

const { Option } = Select;
function App() {


  const handleButton = () => {
    console.log("clicked");

  }
  return (

    <>  <div className="bg-image"></div>
 
      <div className="App">  
      <div className="progress">
          <StepShow/>
      </div>
      
     
        <div className="form-start">



<div className="formbox"> 

          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            className='text-center'
          >

            <Form.Item  >
              <Input  className='tranparent color-light' placeholder='Enter Your Name'/>
            </Form.Item> <Form.Item  >
              <InputNumber className='tranparent color-light'   placeholder='How Much Question'/>
            </Form.Item>
            <Form.Item   className='tranparent color-light' >
              <Select
                showSearch
                dropdownStyle={{ backgroundColor: 'grey' }}
                placeholder="Select Difficulty Level"
                optionFilterProp="children" 
              className='center'
              >
                <Option value="jack" className='tranparent'
                  style={{ backgroundColor: 'green',with:'50px ' }} >Easy</Option>
                   <Option value="jack" className='tranparent'
                  style={{ backgroundColor: 'green',with:'50px ' }} >Medium</Option>
                   <Option value="jack" className='tranparent'
                  style={{ backgroundColor: 'green',with:'50px ' }} >Hard</Option>
                 
              </Select>,
            </Form.Item>




            <Button type="primary" className='selector' onClick={handleButton} >Start Quiz</Button>


          </Form></div>
        </div>
      </div></>
  );
}

export default App;
