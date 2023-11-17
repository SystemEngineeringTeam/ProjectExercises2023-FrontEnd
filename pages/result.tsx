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


export default function Result() {

  const router = useRouter();

  const handler = (path: string) => {

    Router.push(path);
  };

  const imageUrl = typeof router?.query.url === 'string' ? router.query.url : '';

  return (
    <main>
      <Stack h="100vh" align="center" justify="center" spacing={120}>
        <Box>
          <Image
            src={imageUrl}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Box>
        <Box>
          <Button colorScheme="blue" onClick={() => handler("/")}>
            home
          </Button>
        </Box>
      </Stack>
    </main>
  );
}
