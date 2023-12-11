'use client'
import React from 'react'
import { Button, Input } from 'antd'

const {TextArea}=Input

type Props = {}

const page = (props: Props) => {
  return (
    <div className='max-w-xl space-y-3'>
        <Input placeholder='Title' />
        <TextArea placeholder='Description' rows={4} />
        <Button>Submit new Issue</Button>
    </div>
  )
}

export default page