
import './App.css';
import Nevbar from './Compount/Nevbar/Nevbar';
import Mint from './Compount/Mint/Mint';
import Collection from './Compount/Collection/Collection';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  let [btnTxt, setBtTxt] = useState("Connect Wallet");

  return (
    <div className="App">
   
   <BrowserRouter>
   <Nevbar setBtTxt={setBtTxt} btnTxt={btnTxt} />

  
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Mint btnTxt={btnTxt} />} />
          <Route exact path="/Collection" element={<Collection btnTxt={btnTxt}/>} />

    
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

// // import { useEffect, useState } from 'react'

// // import './App.css'

// // function App() {
  
// //     const [date, setDate] = useState(0)
// //     const [data, setData] = useState(0)

// //     function lol (){
// //         setDate( )
// //         setData(date*2)
        
// //     }
// // useEffect(()=>{
// //     setTimeout(()=>{
// //         if(data==5){
            
// //             setData(0)
// //         }
// //         else{
// //         setData(data+1)

// //         }
// //     },1000)

    
// // },[data])

// //   return (
// // <>



// // <h1>{data}</h1>

// // <button onClick={()=>{setData(date*2);setDate(date+1)}}> Click Me</button>
// //  <button onClick={hol}> Click Me</button>


// // </>
// //   )
// // }

// // export default App
// import React from 'react'
// import { Provider } from 'react-redux'
// import Conter from './Compount/Conter/Conter'
// import Store from './Compount/Store/Store'

// Store.subscribe(()=> console.log(Store.getState()));
// function App() {

//   return (
//     <div>
      
//       <Provider store={Store}>
//       <Conter/>
//   </Provider>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'


// function App() {
//   const bg = "#ffc800"
// const [bgc,setBgc] = useState (bg);
// const changeColor = ()=>{
//   let bule = "#A020F0";
//   setBgc (bule);
// }
// const changeColors = ()=>{
//   let bules = "#ffc800";
//   setBgc (bules);
// }
//   return (
//     <div className='h-75 d-flex justify-content-center align-items-center' style={{background:bgc}}>
      
//       <button className='btn btn-info'onClick={changeColor}>
//         click here
//       </button>
//       <button className='btn btn-info'onClick={changeColors}>
//         click here
//       </button>
//     </div>
//   )
// }

// export default App