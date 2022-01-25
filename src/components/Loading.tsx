// import { Spin, Space } from 'antd';
 
// import React from 'react';

// const Loading = () => {
//   return <div><Space size="middle">
//     <Spin size="small" />
//     <Spin />
//     <Spin size="large" />
//   </Space>,</div>;
// };

// export default Loading;


import { useState } from "react";
import '../App.css'
import { css } from "@emotion/react";
import ScaleLoader
from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");

  return (

    <div className="sweet-loading loaderClass">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <ScaleLoader
 color={color} loading={loading} css={override} />
    </div>
  );
}

export default App;