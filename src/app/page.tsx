import { Inter } from 'next/font/google'
import { Button } from '@/components/Button'
// import { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // If you want to use Ref in the Button --> 
  // add "use client"
  // const buttonRef = useRef<null | HTMLButtonElement>(null)
  // <Button ref={buttonRef} variant='default' size="lg">Large</Button>
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10 lg:px-40 gap-5">
      <h1 className='text-2xl text-gray-500 font-thin w-full py-10'>
        <span className='font-bold text-cyan-200'>
          CHNsPart&apos;s
        </span> 
        <br /> 
        Resuable React Components
      </h1>
      <h3 className='text-left w-full font-bold'>Variants</h3>
      <div className='flex flex-col md:flex-row justify-start w-full items-center gap-5'>
        <Button variant='primary'>Primary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='disabled'>Disabled</Button>
      </div>
      <h3 className='text-left w-full font-bold'>Sizes</h3>
      <div className='flex flex-col md:flex-row justify-start w-full items-center gap-5'>
        <Button variant='default' size="lg">Large</Button>
        <Button variant='default' size="md">Medium</Button>
        <Button variant='default' size="sm">Small</Button>
      </div>
    </main>
  )
}
