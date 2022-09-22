import React,{ useState} from 'react'
import { Button } from 'react-bootstrap';

export const  Toggle=()=> {
  const [isHappy,setIsHappy]=useState(true)

  return (
    <div className='text-center mt-3 p-5'>
        <Button onClick={()=>setIsHappy(!isHappy)}>Are you happy? {isHappy?'🙂':'☹️'} </Button>
    </div>
  )
}
