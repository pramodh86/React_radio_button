
import { useState } from 'react';
import './App.css'
import vedio1 from "./videos/v1.mp4"
import vedio2 from "./videos/v2.mp4"

function App() {
  

  let [vedio, setVedio] = useState("firstVideo");
  
  let vedioSource = "";

  if(vedio === "firstVideo")
    {vedioSource=vedio1
      console.log(vedioSource)
    }
  else {vedioSource=vedio2
    console.log(vedioSource)
  }
 

  

   

  return (
    <>

<div className='container'>
      <div className='card'>

       
       <video  controls  className='vedio' >
          <source src={vedioSource} type="video/mp4" />
      </video> 
       <h2>{vedio}</h2>
      <label >Vedio one </label>
       <input type="radio" name="video" value="firstVideo" onChange={(e)=>setVedio(e.target.value)} ></input>
       <label >Vedio two</label>
       <input type="radio" name="video" value="secondVideo" onChange={(e)=>setVedio(e.target.value)}></input>

        
      </div>
    </div>
      
    </>
  )
}

export default App
