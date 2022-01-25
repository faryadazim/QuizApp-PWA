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
import Loading from './components/Loading';
const { Option } = Select;

type QuestionState = Questions & {
  answers: string[]
}


function App() {
  const [loading, setLoading] = useState(true);
  const [question, setquestion] = useState<QuestionState[]>([])
  const [userAnswer, setuserAnswer] = useState();
  const [number, setnumber] = useState(0);
  const [score, setscore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(true);
  // Form Handling 
  const [name, setName] = useState<string>();
  const [TotalQuestion, setTotalQuestion] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');
  const [formFulFil, setformFulFil] = useState<any>(false);

  const handleStart = async () => {
    const Data = await fetchApi(difficulty, TotalQuestion);
    // setformFulFil({name,TotalQuestion,difficulty})
    setquestion(Data)
    setIsGameOver(!isGameOver)


  }

  const checkAnswer = (e: any) => {
    // console.log(e);

  }
  const handleNext = (e: number) => {
    setnumber(e)
  }

  const handleFinish = ()=>{
    setIsGameOver(true)
    setName('')
    setTotalQuestion(0)
    setDifficulty('')
    setnumber(0)

  }

  return (
    <>
      <div className="bg-image"></div>
      <div className="App">
        <div className="progress">
          <StepShow />
        </div>
        <div className="form-start">
          {
            isGameOver ? <div className="formbox">
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                className='text-center' >
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
                  !name || !difficulty || (!TotalQuestion || undefined) ? null : <Button type="primary" className='selector' onClick={handleStart} >Start Quiz</Button> } </Form>
            </div> :// <Loading/>
              <QuestionCard
                question={question[number].question}
                answers={question[number].answers}
                QuestionNr={number + 1}
                TotalQuestion={TotalQuestion}
                userState={userAnswer}
                callback={checkAnswer}
                score={score}
                handleFinish={handleFinish}
                handleNext={handleNext} />
          }
        </div>
      </div>
    </>
  );
}

export default App;
