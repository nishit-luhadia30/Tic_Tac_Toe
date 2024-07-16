import React, { useRef, useState } from 'react'
import cross_icon from './assets/cross.png';
import circle_icon from './assets/circle.png';

let data = ["","","","","","","","","",]

function App() {

  let [count, setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toogle = (e,num) => {
    if(lock) return 0;
    else if(count%2 === 0){
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = 'x';
      setCount(++count);
    }
    else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = 'o';
      setCount(++count);
    }
    checkWin();
  }

  const checkWin = () => {
    if(data[0] === data[1] && data[1]===data[2] && data[0]!==''){
      win(data[0])
    }
    else if(data[3] === data[4] && data[4]===data[5] && data[5]!==''){
      win(data[3])
    }
    else if(data[6] === data[7] && data[7]===data[8] && data[8]!==''){
      win(data[6])
    }
    else if(data[0] === data[3] && data[3]===data[6] && data[6]!==''){
      win(data[0])
    }
    else if(data[1] === data[4] && data[4]===data[7] && data[7]!==''){
      win(data[1])
    }
    else if(data[2] === data[5] && data[5]===data[8] && data[8]!==''){
      win(data[2])
    }
    else if(data[0] === data[4] && data[4]===data[8] && data[8]!==''){
      win(data[0])
    }
    else if(data[2] === data[4] && data[4]===data[6] && data[6]!==''){
      win(data[2])
    }
  }

  const win = (winner) => {
    setLock(true);
    if(winner === 'x'){
      titleRef.current.innerHTML = `Congratulations <img src='${cross_icon}'> won`
    }
    else{
      titleRef.current.innerHTML = `Congratulations <img src='${circle_icon}'> won`
    }
  }

  const reset = () => {
    setLock(false)
    data = ["","","","","","","","","",]
    titleRef.current.innerHTML = `Tic Tac Toe from `;
    box_array.map((e) => {
      e.current.innerHTML= '';
    })
  }

  return (
    <>
      <div className='m-0 p-0'>
        <h1 className='flex justify-center text-4xl m-5 font-bold hello' ref={titleRef}>Tic Tac Toe from</h1>
        <div className='flex justify-center mt-5'>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box1} onClick={(e) => {toogle(e,0)}}></div>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box2} onClick={(e) => {toogle(e,1)}}></div>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box3} onClick={(e) => {toogle(e,2)}}></div>
        </div>
        <div className='flex justify-center'>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box4} onClick={(e) => {toogle(e,3)}}></div>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box5} onClick={(e) => {toogle(e,4)}}></div>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box6} onClick={(e) => {toogle(e,5)}}></div>
        </div>
        <div className='flex justify-center'>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box7} onClick={(e) => {toogle(e,6)}}></div>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box8} onClick={(e) => {toogle(e,7)}}></div>
          <div className="h-32 w-32 bg-gray-700 m-1 p-5 rounded" ref={box9} onClick={(e) => {toogle(e,8)}}></div>
        </div>
        <div className='flex justify-center'>
          <button className='m-5' onClick={() => {reset()}}>Reset</button>
        </div>
        
      </div>
    </>
  )
}

export default App
