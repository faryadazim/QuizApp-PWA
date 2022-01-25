import { shuffleArray } from './../utility';

export type Questions= {
    category:string,
        correct_answer:string,
        incorrect_answers:string[],
        question:string,

}



export const  fetchApi =async(difficulty:string,TotalQuestion:number)=>{
    console.log(difficulty,TotalQuestion);
    
    const url = `https://opentdb.com/api.php?amount=${TotalQuestion}&difficulty=${difficulty}&type=multiple`
    const {results} = (await (await fetch(url)).json())
 
    
        const data=     results.map(({category, correct_answer,incorrect_answers,  question}:Questions)=>{
return({category, correct_answer,incorrect_answers,  question, answers:shuffleArray([correct_answer, ...incorrect_answers])});

            })
       
      return data
}