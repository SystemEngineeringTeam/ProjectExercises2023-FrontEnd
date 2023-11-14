import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import { Button } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import Router from 'next/router'
import { UserInformation } from '../components/userInformation'
import { Http } from '../components/http'





export default function Home() {

  const handler = (path: string) => {
    Router.push(path)
  }


  const [isStart, setIsStart] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("スタート");

  const handleClick = () => {
    //まだスタートしていないとき
    if (!isStart) {
      startFC();

      setButtonMessage(prev => "終了");
      //終了するとき
    } else {
      toResultFC();
    }
    // 関数の切り替え
    setIsStart(!isStart);
  };

  const startFC = () => {

  };

  const toResultFC = () => {
    handler('/result')
  };


  return (
    <main>
      <UserInformation face="" position="北" pulse=""></UserInformation>
      <UserInformation face="" position="東" pulse=""></UserInformation>
      <UserInformation face="" position="西" pulse=""></UserInformation>
      <UserInformation face="" position="南" pulse=""></UserInformation>

      <Center h='100vh' color='white'>
        <Button height={12} colorScheme='cyan' paddingX='48px' fontSize="24" borderRadius={16} onClick={() => handleClick()}>
          {buttonMessage}
        </Button>
      </Center>
    </main>
  )
}
