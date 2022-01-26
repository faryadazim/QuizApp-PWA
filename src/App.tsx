import QuestionCard from './components/QuestionCard';
import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchApi, Questions } from './services/fetchAPI';
import StepShow from './components/StepShow'
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
} from 'antd';
import Loading from './components/Loading';
import ResultCard from './components/ResultCard';

 
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics"; const { Option } = Select;

type QuestionState = Questions & {
  answers: string[]
}













const firebaseConfig = {

  apiKey: "AIzaSyDB16OZ6v3EhpS_leqpzg7g3SgEBkVQe4o",

  authDomain: "quizee-faryad-azim.firebaseapp.com",

  projectId: "quizee-faryad-azim",

  storageBucket: "quizee-faryad-azim.appspot.com",

  messagingSenderId: "950176253850",

  appId: "1:950176253850:web:655202ee4b6bf1613a9c23",

  measurementId: "G-98V6CFV75R"

}; 

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);














function App() {
  const [loading, setLoading] = useState(false);
  const [question, setquestion] = useState<QuestionState[]>([])
  const [userAnswer, setuserAnswer] = useState<any>([]);
  const [number, setnumber] = useState(0);
  const [score, setscore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(true);
  const [progress, setprogress] = useState('start');
  // Form Handling 
  const [name, setName] = useState<string>();
  const [TotalQuestion, setTotalQuestion] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');
  const [showResult, setshowResult] = useState(false);
  // const [formFulFil, setformFulFil] = useState<any>(false);

  const handleStart = async () => {
    setLoading(true)
    const Data = await fetchApi(difficulty, TotalQuestion);
    setprogress('test')
    setquestion(Data)
    setIsGameOver(!isGameOver)
    setLoading(false)
  }
  const checkAnswer = (e: any) => {
    setuserAnswer([
      ...userAnswer,
      {
        Question: question[number].question,
        UserAnswer: e,
        Correct_Answer: question[number].correct_answer,
      }
    ])
    if (e === question[number].correct_answer) {
      setscore(score + 1)
    }
  }
  const handleNext = (e: number) => {
    setnumber(e)
  }
  const handleFinish = () => {
    setshowResult(true)
    console.log(userAnswer);
    setDifficulty('')
  }
  const handleCertificate = () => {
    setIsGameOver(true)
    setshowResult(false)
    setName('')
    setprogress('start')
    setTotalQuestion(0)
    setnumber(0)
    setscore(0)
  }
  useEffect(() => {
    const progressFunc = () => {
      setprogress('finish')
    }
    number === (TotalQuestion - 1) && progressFunc()
  });

  return (
    <>
      <div className="bg-image"></div>
      <div className="App">
        <div className="progress">
          <StepShow progress={progress} />
        </div>
        <div className="form-start">
          {
            isGameOver && !loading && <div className="formbox">
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                className='text-center margin-top' >
                <Form.Item  >
                  <Input className='tranparent color-light' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                </Form.Item> <Form.Item  >
                  <InputNumber className='tranparent color-light' value={TotalQuestion} onChange={(e) => setTotalQuestion(e)} placeholder='How Much Question' />
                </Form.Item>
                <Form.Item className='tranparent color-light' >
                  <Select
                    onSelect={(e: any) => setDifficulty(e)}
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
                {
                  !name || !difficulty || (!TotalQuestion || undefined) ? null : <Button type="primary" className='selector' onClick={handleStart} >Start Quiz</Button>} </Form>
            </div>
          }
          {
            loading && <Loading />
          }
          {
            !isGameOver && !loading && !showResult && <QuestionCard
              question={question[number].question}
              answers={question[number].answers}
              QuestionNr={number + 1}
              TotalQuestion={TotalQuestion}
              callback={checkAnswer}
              score={score}
              handleFinish={handleFinish}
              handleNext={handleNext} />
          }
          {
            !isGameOver && showResult && <ResultCard handleCertificate={handleCertificate} score={score} TotalQuestion={TotalQuestion} name={name} />
          }
        </div>
      </div>
    </>
  );
}
export default App;
