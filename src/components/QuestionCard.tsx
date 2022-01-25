import React, { useState } from 'react';
import { Radio, Input, Space } from 'antd';


import {
    Button
} from 'antd';

type Props ={
    question:string,
    answers:string[],
    QuestionNr:number ,
    TotalQuestion:number,
     userState:any,
     callback:any ,
    score:number
}



const QuestionCard = ({question ,
    answers ,
    QuestionNr ,
    TotalQuestion,
     userState,
     callback ,
    score}:Props) => { 
const [selectedAns, setselectedAns] = useState();
    const SelectedAnswer = (e: any) => {
        setselectedAns(e.target.value)
    

    }
    console.log( { answers ,
        QuestionNr ,
        TotalQuestion,
         userState,
         callback ,
        score});
    

    return <>
        
            <div style={{  marginTop: '12px', display: 'flex', justifyContent: 'space-around', fontSize: '18px' }}>
                <span> Question : { QuestionNr} / {TotalQuestion} </span>   <span>  Score : {score}</span></div>
 
        <div className='questionBox'>
            <p className='questionBox1'>
              {question}
            </p>
            <div className="answersBox">

            </div>
            <Radio.Group onChange={SelectedAnswer} style={{ marginTop: '45px' }}>     {/* value={value}    */}
                <Space direction="vertical">
                    {
                        answers.map((item, index)=>{
                            return  <Radio key={index} value={item}>{item}</Radio> 
                        })
                    }
                   
                </Space>
            </Radio.Group>

        </div>
        <Button   type="primary" className='selector' onClick={()=>callback(selectedAns)} >Next</Button>


    </>;
};

export default QuestionCard;
