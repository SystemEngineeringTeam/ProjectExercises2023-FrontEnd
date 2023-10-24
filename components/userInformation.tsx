import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { text } from 'stream/consumers';

export const UserInformation = (props: {top?: string; bottom?: string; left?: string; right?: string; face: string; position: string; pulse: string}) => {

    const {top, bottom, left, right, face, position, pulse} = props;

    const contentData = {
        top,
        bottom,
        left,
        right,
        face,
        position,
        pulse,
    }

    return (
        <Box pos="absolute" top={top} bottom={bottom} left={left} right={right} fontSize="120px" textAlign="center" display="flex">
            <Box>
                <div>{face}</div>
            </Box>
            <Box pos="relative" top="8" left="10" fontSize="40px">
                <div>{position}</div>
                <div>{pulse}</div>
            </Box>
        </Box>
    )

    {/* <Box pos="absolute" top="0" left="10" fontSize="120px" textAlign="center" display="flex">
        <Box>
          <div>😃</div>
        </Box>
        <Box pos="relative" top="8" left="10" fontSize="40px">
          <p>北</p>
          <p>120</p>
        </Box>
      </Box> */}
}