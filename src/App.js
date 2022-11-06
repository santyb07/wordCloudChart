import React, { useEffect, useState } from 'react';

import axios from "axios"
import WordCloud from "react-d3-cloud";


function App() {
  const [twitterData,setTwitterData] = useState();

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get("http://localhost:3500/stats");
      const data= res.data;
      setTwitterData(data);
      console.log(data);
    }
    fetchData();
  },[])

  const hashTagsWithValue = twitterData?.twitter?.timelineStats?.timeline[0].hashtags
  console.log(hashTagsWithValue)

  // const hashtags = Object?.keys(hashTagsWithValue).map((value)=>{
  //   console.log(hashtags)
  // })
 


const data=[{
  text:'hello',
  value:1000
},
{
  text:'hello',
  value:1000
}
]

  return (
    <WordCloud
    width={1000}
    height={750}
    data={data}
    fontSize={100}
    rotate={150}
    padding={2}
    />
  );
}

export default App;
