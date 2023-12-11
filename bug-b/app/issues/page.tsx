'use client'
import React from 'react'
import { Button } from 'antd'
import Link from 'next/link'


type Props = {}

const IssuesPage = (props: Props) => {
  return (
    <div>
       <Button><Link href={'/issues/new'}>New Issues</Link></Button>
    </div>
  )
}

export default IssuesPage