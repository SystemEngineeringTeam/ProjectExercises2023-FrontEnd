import { Button } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Router from "next/router";
import { UserInformation } from "../components/userInformation";
import axios from "axios";
import React, { useState } from 'react';
import { Backend } from './api/backend'


type BoardSurface = {
  FinishTime: string;
  url: string; //画像のurl
};

const azimuths: string[] = [
  "north", "east", "west", "south"
];

export default function Home() {
  const handler = async (path: string) => {
    //グラフの画像をaxiosを使用して受け取る
    const response = await axios.post<BoardSurface>(
      "https://heartbeat.sysken.net/api/v1/finish"
    )
    //画像のURL
    const graphUrl = response.data.url;
    const query = {
      url: graphUrl
    }

    //URL遷移
    Router.push({ pathname: path, query: query }, path);
  };

  //useStateの定義
  const [isStart, setIsStart] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("スタート");
  const [nowIntervalId, setNowIntervalId] = useState<NodeJS.Timeout>();

  const [bpmList, setBpmList] = useState<BpmList>({
    "north": 0,
    "east": 0,
    "west": 0,
    "south": 0
  });
  const [emotionList, setEmotionList] = useState<{ [key: string]: string }>({
    "north": "normal",
    "east": "normal",
    "west": "normal",
    "south": "normal",
  });

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

  const startFC = async () => {
    const backend = new Backend();
    //バックエンドにスタートしたことを伝える
    const isStart = await backend.start();
    //スタートできる状態かチェック
    if (!isStart) {
      alert("スタートできませんでした");
      return;
    }
    //1秒ごとに関数を呼び出す
    const intervalId = setInterval(async () => {
      //上書き用データ
      const newBpmList: BpmList = {
        "north": 0,
        "east": 0,
        "west": 0,
        "south": 0
      };
      const newEmotionList: { [key: string]: string } = {
        "north": "normal",
        "east": "normal",
        "west": "normal",
        "south": "normal"
      };
      for (const azimuth of azimuths) {
        const {bpm, emotion} = await backend.getData(azimuth);
        newBpmList[azimuth] = bpm;
        newEmotionList[azimuth] = emotion;
      }
      setBpmList(newBpmList);
      setEmotionList(newEmotionList);
    }, 1000);


    setNowIntervalId(intervalId);
    // return () => clearInterval(intervalId);
  };

  const toResultFC = () => {
    console.log(nowIntervalId)
    clearInterval(nowIntervalId);
    handler('/result');
  };

  const faceList: { [key: string]: string } = {
    "normal": "😀",
    "surprise": "😱",
    "nervous": "😬",
    "relief": "😊",
  }

  // console.log(emotionList);

  return (
    <main>
      <UserInformation face={faceList[emotionList["north"]]} position="北" pulse={bpmList["north"]}></UserInformation>
      <UserInformation face={faceList[emotionList["east"]]} position="東" pulse={bpmList["east"]}></UserInformation>
      <UserInformation face={faceList[emotionList["west"]]} position="西" pulse={bpmList["west"]}></UserInformation>
      <UserInformation face={faceList[emotionList["south"]]} position="南" pulse={bpmList["south"]}></UserInformation>
      <Center h="100vh" color="white">
        <Button height={12} colorScheme='cyan' paddingX='48px' fontSize="24" borderRadius={16} onClick={() => handleClick()}>
          {buttonMessage}
        </Button>
      </Center>
    </main>
  );
}