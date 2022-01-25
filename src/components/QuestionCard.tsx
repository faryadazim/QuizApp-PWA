import React, { useState } from 'react';
import { Radio, Input, Space } from 'antd';


import {
    Button
} from 'antd';





const QuestionCard = ({question ,
    answers ,
    QuestionNr ,
    TotalQuestion,
     userState,
     callback ,}:any) => {
// console.log(question); 
const [selectedAns, setselectedAns] = useState();
    const SelectedAnswer = (e: any) => {
        setselectedAns(e.target.value)
    

    }

    return <>
        
            <div style={{  marginTop: '12px', display: 'flex', justifyContent: 'space-around', fontSize: '18px' }}>
                <span> Question 2 / 10 </span>   <span>  Score :4</span></div>
 
        <div className='questionBox'>
            <p className='questionBox1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nemo sint harum veritatis rerum.
            </p>
            <div className="answersBox">

            </div>
            <Radio.Group onChange={SelectedAnswer} style={{ marginTop: '45px' }}>     {/* value={value}    */}
                <Space direction="vertical">
                    <Radio value={1}>Option A</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                    <Radio value={4}>Option D</Radio>
                </Space>
            </Radio.Group>

        </div>
        <Button   type="primary" className='selector' onClick={callback(selectedAns)} >Start Quiz</Button>


    </>;
};

export default QuestionCard;
