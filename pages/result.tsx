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

export default function Result() {
  const handler = (path: string) => {
    Router.push(path);
  };

  return (
    <main>
      <Stack h="100vh" align="center" justify="center" spacing={120}>
        <Box>
          <Image
            src="https://img.esa.io/uploads/production/attachments/13979/2023/10/03/129607/614cedd5-e28b-4677-b313-3588a38b0c80.png"
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
