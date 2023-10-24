import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import Router from 'next/router'
import css from 'styled-jsx/css'
import { UserInformation } from '../components/userInformation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handler = (path: string) => {
    Router.push(path)
  }
  console.log(UserInformation)

  return (
    <main>
      <UserInformation top="0" left="10" face="😄" position="北" pulse="110"></UserInformation>
      <UserInformation top="0" right="20" face="😅" position="東" pulse="130"></UserInformation>
      <UserInformation bottom="0" left="10" face="😏" position="西" pulse="90"></UserInformation>
      <UserInformation bottom="0" right="20" face="😇" position="南" pulse="0"></UserInformation>

      <Center h='100vh' color='white'>
        <Button height={12} colorScheme='cyan' paddingX='48px' fontSize="24" borderRadius={16} onClick={() => handler('/result')}>
          終了
        </Button>
      </Center>
    </main>

  )
}
