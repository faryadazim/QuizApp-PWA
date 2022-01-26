import { Result, Button } from 'antd';



const ResultCard = ({ handleCertificate, score, TotalQuestion, name }: any) => {

  const subTitleHere = `You got ${score} marks out of ${TotalQuestion}`
  

  const user = ` Mr/Mrs ${name} ..: Thanks for Attempting Quiz devolped by Faryad Az Zim`
  return <> <div className="resultCard">
    <Result
      status="success"
      title={subTitleHere}
      subTitle={user}
      extra={[
        <Button key={name} type="primary" className='selector' onClick={() => handleCertificate()}  >Try Again</Button>,
      ]}
    />
  </div> </>;
};

export default ResultCard;





