import QuestionCard from './components/QuestionCard';
import React, { useState } from 'react';
import './App.css';
import { fetchApi } from './services/fetchAPI';
import StepShow from './components/StepShow'
import { Questions } from './services/fetchAPI'
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
} from 'antd';
const { Option } = Select;

type QuestionState = Questions & {
  answers: string[]
}


function App() {
  const [loading, setLoading] = useState();
  const [TotalQuestion, setTotalQuestion] = useState(10);
  // const [questionstate, setquestionstate] = useState<QuestionState[]>([]);
  const [question, setquestion] = useState<QuestionState[]>([])
  const [userAnswer, setuserAnswer] = useState();
  const [number, setnumber] = useState(0);
  const [score, setscore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(true);

  const handleButton = async () => {
    const Data = await fetchApi();
    setquestion(Data)
    setIsGameOver(!isGameOver)
  }
  // console.log(26466057362626116299);
const checkAnswer=(e:any)=>{
  console.log(e);
  
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
          </div> : 
          <QuestionCard
            question={question[number].question}
            answers={question[number].answers}
            QuestionNr={number}
            TotalQuestion={TotalQuestion} userState={userAnswer} callback={checkAnswer} />}
        </div>
      </div>
    </>
  );
}

export default App;
