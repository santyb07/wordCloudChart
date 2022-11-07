import React, { useEffect, useState } from 'react';

import axios from "axios"
import WordCloud from "react-d3-cloud";


const fontSize = (word) => {
  console.log(word);
  if(word.value<3000){
    return 12;
  }else{
    return word.value / 300;
  }
};

const rotate = (word) =>{
  return (word.value % 90) - 45;
}

function App() {
  const [twitterData,setTwitterData] = useState();

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get("http://localhost:3500/stats");
      const data= res.data;
      setTwitterData(data);
      // console.log(data);
    }
    fetchData();
  },[])

  const hashTagsWithValue = twitterData?.twitter?.timelineStats?.timeline[0].hashtags
  // console.log(hashTagsWithValue)

  let hashtags=[]
  if(hashTagsWithValue){
    hashtags = Object.keys(hashTagsWithValue).map((data)=>{
      return { text: data, value:1000*hashTagsWithValue[data]}
      }
     )
     console.log(hashtags)
  }


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
    width={300}
    height={500}
    data={hashtags}
    fontSize={fontSize}
    rotate='0'
    padding={2}
    fill={'blue'}
    />
  );
}

export default App;
