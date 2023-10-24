import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { text } from 'stream/consumers';

export const UserInformation = (props: {face: string; position: string; pulse: string}) => {

    const {face, position, pulse} = props;

    const contentData = {
        face,
        position,
        pulse,
    }

    //set user information position by user position data
    const userInformationPosition = {top:"undefined", bottom:"undefined", left:"undefined", right:"undefined"}
    if(contentData.position === "北"){
        userInformationPosition.top = "0"
        userInformationPosition.left = "10"
    } else if(contentData.position === "東"){
        userInformationPosition.top = "0"
        userInformationPosition.right = "20" 
    } else if (contentData.position === "西"){
        userInformationPosition.bottom = "0"
        userInformationPosition.left = "10"
    } else if (contentData.position === "南"){
        userInformationPosition.bottom = "0"
        userInformationPosition.right = "20"
    } else {
        console.log("position data is out of range")
    }

    return (
        <Box pos="absolute" top={userInformationPosition.top} bottom={userInformationPosition.bottom} left={userInformationPosition.left} right={userInformationPosition.right} fontSize="120px" textAlign="center" display="flex">
            <Box>
                <div>{face}</div>
            </Box>
            <Box pos="relative" top="8" left="10" fontSize="40px">
                <div>{position}</div>
                <div>{pulse}</div>
            </Box>
        </Box>
    )
}