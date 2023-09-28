import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import axios from '@/data/axios'
import endpoints from '@/data/endpoints'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [value, setValue] = useState()
  // async function calledAPI() {

  //   try {
  //     const res = await axios.get(endpoints.fetchTrending)
  //     console.log(res.data)
  //   }
  //   catch (res) { console.log("error") }

  // }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <button onClick={calledAPI}>click</button> */}

    </main>
  )
}
