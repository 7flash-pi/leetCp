import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useRouter} from 'next/router'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  const router=useRouter()
  return (
    <main className='flex justify-center'>
      <ul>
        <li onClick={() => {
          router.push('gridLight')
        }}>GridLightChallenge</li>
         <li onClick={() => {
          router.push('trafficLight')
        }}>TrafficLightChallenge</li>
      </ul>

    </main>
   
  )
}
