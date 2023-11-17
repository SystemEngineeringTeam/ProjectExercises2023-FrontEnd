import { Inter } from "next/font/google";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import Router from "next/router";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSpring, animated } from 'react-spring';


export default function Result() {

  const router = useRouter();

  const handler = (path: string) => {
    Router.push(path);
  };

  const imageUrl = typeof router?.query.url === 'string' ? router.query.url : '';

  const bounceProps = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-20px)" },
    config: { duration: 500 },
    reset: true,
    reverse: true,
  });

  return (
    <main>
      <div style={{ backgroundColor: "#add8e6"}}></div>
      <Stack h="10vh" align="center" justify="center" spacing={120}>
        <Box>
          <animated.img
            style={bounceProps}
            src={imageUrl}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Box>
        <Box>
          <Button colorScheme="blue" onClick={() => handler("/")}>
            homeに戻る
          </Button>
        </Box>
      </Stack>
      
    </main>
  );
}
