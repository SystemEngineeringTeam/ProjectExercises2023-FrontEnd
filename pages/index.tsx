import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import Router from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handler = (path:string) => {
    Router.push(path)
  }

  return (
    <main>
      <Center h='100vh' color='white'>
        <Button colorScheme='blue' onClick={() => handler('/result')}>Button</Button>
      </Center>
    </main>
    
  )
}
