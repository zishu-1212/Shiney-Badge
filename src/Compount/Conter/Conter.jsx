import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increace,decreacing} from "../action/action"
function Conter() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch =useDispatch();
  return (
    <div className='d-flex align-items-center justify-content-center'style={{gap:"12px"}}>
      <button className='btn btn-info  'onClick={()=>{dispatch(increace())}}>+</button>
      <p className='border '>{myState}</p>
      <button className='btn btn-info 'onClick={()=>{dispatch(decreacing())}}>-</button>
    </div>
  )
}

export default Conter
