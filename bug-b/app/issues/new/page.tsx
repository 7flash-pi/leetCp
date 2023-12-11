'use client'
import { Button, Input } from 'antd'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


type Props = {}

const page = (props: Props) => {
  return (
    <div className='max-w-xl space-y-3'>
        <Input placeholder='Title' />
        <SimpleMDE placeholder='Description'/>
        <Button>Submit new Issue</Button>
    </div>
  )
}

export default page