import React from 'react'

type Props = {
    color:string,
    isActive:boolean,

}

const TrafficCells = ({color,isActive}: Props) => {
  return (
    <div className={`w-14 h-14  rounded-[50%] border border-[#000]`} style={{backgroundColor:`${isActive ? color : '#fff'}`}}>

    </div>
  )
}

export default TrafficCells