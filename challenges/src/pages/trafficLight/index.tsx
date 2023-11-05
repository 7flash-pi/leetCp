import React, { useEffect, useState } from 'react'
import TrafficCells from './TrafficCells'

type Props = {}

const TrafficWrapper = (props: Props) => {

    const [selectedColor, setselectedColor] = useState(1)

    const colorConfig=[
        {
            color:'#ff0000',
            interval:1200,
        },
        {
            color:'#FFD500',
            interval:600,
        },
        {
            color:'#008000',
            interval:1200
        }
    ]
    useEffect(()=>{
      
       let interval= setTimeout(()=> {
            setselectedColor((prevSelectedColor => {
                if(prevSelectedColor === colorConfig.length-1)
                    return 0
                return prevSelectedColor+1
            }))
            console.log({currentInterval:colorConfig[selectedColor]?.interval})
            
        },colorConfig[selectedColor]?.interval)

     
        
    },[selectedColor])


  return (
    <div className='h-[250px] bg-[#fff] w-[80px] rounded-lg flex justify-center items-center mx-auto mt-[80px] border flex-col gap-4 border-[#000]'>
        
        {
            colorConfig?.map((item,index)=>(
                <TrafficCells color={item.color} isActive={index===selectedColor} key={index} />
            ))
        }

    </div>
  )
}

export default TrafficWrapper