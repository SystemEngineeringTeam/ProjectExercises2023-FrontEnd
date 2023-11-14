import { Button } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Router from "next/router";
import { UserInformation } from "../components/userInformation";
import { Http } from "../components/http";
import axios, { AxiosResponse } from "axios";

type BoardSurface = {
  StartTime: string;
  FinishTime: string;
  url: string;
};

export default function Home() {
  const handler = async (path: string) => {
    //TODO グラフの画像を受け取る
    const response: AxiosResponse<BoardSurface[]> = await axios.post(
      "https://heartbeat.sysken.net/api/v1/finish"
    );
    console.log(response.data);
    //URL遷移
    Router.push(path);
  };

  return (
    <main>
      <UserInformation face="😄" position="北" pulse="110"></UserInformation>
      <UserInformation face="😅" position="東" pulse="130"></UserInformation>
      <UserInformation face="😏" position="西" pulse="90"></UserInformation>
      <UserInformation face="😇" position="南" pulse="0"></UserInformation>

      <Center h="100vh" color="white">
        <Button
          height={12}
          colorScheme="cyan"
          paddingX="48px"
          fontSize="24"
          borderRadius={16}
          onClick={() => handler("/result")}
        >
          終了
        </Button>
      </Center>
    </main>
  );
}
