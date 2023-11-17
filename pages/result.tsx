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
import { useSpring, animated } from "react-spring";

export default function Result() {
  const router = useRouter();

  const handler = (path: string) => {
    Router.push(path);
  };

  const imageUrl =
    typeof router?.query.url === "string" ? router.query.url : "";

  const bounceProps = useSpring({
    from: { transform: "translateY(140px)" },
    to: { transform: "translateY(0px)" },
    config: { duration: 500 },
    reset: true,
    reverse: true,
  });

  return (
    <main style={{ backgroundColor: "#add8e6", height: 800 }}>
      <Stack h="130vh" align="center" justify="center" spacing={120}>
        <Box style={{ marginTop: "100px" }}>
            <animated.img
            style={{
             ...bounceProps,
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow here
            }}
            src={imageUrl}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Box>
        <Box>
          <Button colorScheme="blue" onClick={() => handler("/")} bottom={120}>
            homeに戻る
          </Button>
        </Box>
      </Stack>
    </main>
  );
}
