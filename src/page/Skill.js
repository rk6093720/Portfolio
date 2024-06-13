import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Skill() {
  return (
    <Center
      // border={{
      //   base: "1px solid red",
      //   sm: "1px solid green",
      //   lg: "1px solid blue",
      // }}
      margin={{ base: "auto", sm: "auto", lg: "auto" }}
      maxW={{ base: "300%", sm: "80%", lg: "80%" }}
      marginTop={{ base: "900px", sm: "500px", lg: "50px" }}
      pt={{ base: "90px", sm: "100px", lg: "20px" }}
      id="skills"
      textAlign={{ base: "center", sm: "center", lg: "center" }}
      marginLeft={{ base: "1em", sm: "5em", lg: "8em" }}
      flexDirection={{ base: "column", md: "column", lg: "column" }}
    >
      <Heading
        alignContent={{ base: "center", sm: "center", lg: "center" }}
        fontSize={"lg"}
      >
        Tech Stack And Developer Tools
      </Heading>
      <Flex
        justifyContent={"space-around"}
        direction={{ base: "column", lg: "row" }}
        marginTop={"75px"}
      >
        <Box
          w={{ base: "100%", lg: "48%" }}
          borderRadius={"12px"}
          p={{ base: "5px", sm: "5px", lg: "5px" }}
          boxShadow={"rgba(255, 255, 255, 0.35) 10px 5px 15px;"}
        >
          {/* here */}
          <Text fontSize={"23px"}>Teach Stack</Text>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/html-5.png"}
              ></Image>
              <Text className="skills-card-name">HTML</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/css3.png"}
              ></Image>
              <Text className="skills-card-name">CSS</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/javascript.png"}
              ></Image>
              <Text className="skills-card-name">JavaScript</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/react-native.png"}
              ></Image>
              <Text className="skills-card-name">React</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/redux.png"}
              ></Image>
              <Text className="skills-card-name">Redux</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                justifyContent={"center"}
                src={"https://img.icons8.com/color/1x/chakra-ui.png"}
              ></Image>
              <Text className="skills-card-name">Chakra UI</Text>
            </Flex>

            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                justifyContent={"center"}
                src={
                  "http://www.verticaldivers.com/wp-content/uploads/Advanced-javascript.png"
                }
              ></Image>
              <Text className="skills-card-name">Adv Js</Text>
            </Flex>

            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                justifyContent={"center"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4Uv9PgJs21QBZDtwX57TIDrhH3Jo-7a6TA&s"
                }
              ></Image>
              <Text className="skills-card-name">Node js</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                justifyContent={"center"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s"
                }
              ></Image>
              <Text className="skills-card-name">Express js</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                justifyContent={"center"}
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEUTqlL///8AqEwAp0kLqU8ApEL0+/fq9+8Aojz8/v0Aoz/3/fpnxIoAoTnu+PI+tmzk9evb8eRPu3grsmKo3LtHuXMjsF3J6dW24ca+5Myb1rFXvn42s2aK0KTS7dyAzJtyx5KT06oAny8lCDWhAAAH80lEQVR4nM2ca5erKgyGEVBrtd7vWlv3//+RB3tVwWpftXPyZe/pWsM8hRBCEkK0FWK7QVaUZyf0ojQlJE0jL3TOZdH4rr1mXAL/plm0TlITyhilnJObcE67n0mdOG1h/hbKCPIrPx109oQZC+dMP5z4NQ+MH0EFpRNRNoEzQGM0ckp/dygrKL2TThcQPbiofvLKwNoRysqutdCYL4Wy+tp8hfUFlB9HpyWrppgvdqjjL/R+MZQRe/TrSepNF03ixUq/EMosyXEF0g3rmMbuhlBWnizX7WnhNMkX6dYSqKxaO0tPoceq2QTKbdONkG5YaTu/hrNQWa1vsHJv4UcvWwllnMmG03QXSs4z+/AzVBNuO0134XoVwFBWsaU29YWmBQhlnTH7vUQ4ayEo88r2QuqEXafPnUkoM9H3ZCJEDydtwxRU4+06T52wZMqQTkAF6e5MgiqacADVUNle224oNFLbUSVU8BumyblSQTXRj5i6uVLplQLK3F/H38ISxR6Uoczkh0yCKpTtlQRlXXe2T2PRr7NQ4mz5LZOYq3YOqvg5k6Aan84jqCbd7QyeFp4Gn6CMEDYG3MOVkYbGB6gzruS08nGHUG+noQqCL94p1i6wPnKSTUG5NW7JmSNOpxr+TtRzJ6DwxeN622lFfEAHGC5gDyqDF4/zx5D4YcDTRgVlwzuP6/ljDD+EqWhlKaBydO45j1+D+BFMdcxlKDNBJ0p/Mwllh1eQvv2FF1SJMrGL1pcAvlLTeAxloFquX0ch8ww9qXhqjKDKIzYSTSV3KAeHIsd4COV72NfjRHH/bsEFpIk5gIrBcY6tzKQZDqjsT626Q1kRNlHUU+ZgTFCtaG31oDLURk0ET3Jw4g/NG8oC51u/qJk0DfSt2NV6QQXY6nE6GfsKplJJMyPWwQuqxCbqU4wJtMWsfEFhfpDkWvfFxGwM9Z5QwQn5faKfp5lgE3ryH1AlqJUfo6kuNlW3011AGRW0/vT6OaURQ4pKHeMG1WB7j34M8AqtgjSVR8ENCjtihq6+SlpIK2h+g8Is57ThfEoAjcuuNygsWq7PpqNsB1kCzjsoHzIIvJ5PRuXQVJ1MAYUZFHqZTyf6kLNwKAQUFpBi+SwTqK3iWkpsTM/55zzUXWJkEZhjEzOBzInauxtJgNxGeOISzG3p4hnzAoW7eO2TDECSAkpTgulrQ7B9e1TouS0nYaHBaUEwB0/lIWTyYRhAqlESKPzGiSKnksfSRyaisOxMIL+Fe4q0ZllKH1keMDp1CGQRqCqrWbbyZxWwDjQkkEWgjsJMtQq/AclDc4+kANPzfjaUs+JDRGN5hCB1MSn571sXxfRBsV1onqRA2TQU5H1uCGVfK9l6ghclEEpePtsJZSjMTwehFDptO4rM6y91SmUSDEdxv4HOixTD4opJEVCymUc8SGESIOPJFfUERlXLH0IOlYcdMyovwagi6UMD+crimMECCUfZTXErOTTkI/6wOJCxzKEiDCSgpPtphgwuXBfQyasUUESCgiIvwsnD3GGeSkrthnxc42NBxWrCHcYuDopAkBvSMZSL7aIMvGIpQmZuKBU9BIg953UAXkaFpRpbSlOGgk6+7jIKXtvlS5aZjOMLFpTX7K7t4IVR3n9moo+gGizw1cKhIDHNmQQ1umNhX/cWCsKCZrL7IqCGdywwl3ULmmloUb4efIaCAkGP8CIYiL2HTIdQbf9nF0uuPAKxaFZ0pFUCanAgYsH9Z8gaDO53OV9jCNW/TmABz1dwH0yDCDmUQ6j+el6wK8MzDbLmytFbQDfUe+G9At093ffsoBrQKAwT27ZzfEMZSLilk1OgrUpCdqL3LoDt4WXkLXDxeklIrcXrKN8FKlr+L3ztPLhw5p2uBd2XTrj+Uiv7n/f4X4OWDPYT26in0AmtX05wVN//DVCFGpQAaAVeTEcoeR43cXq3UHhh1+E+7Y+ykjWFsCx5UJm33WciIcW70KhfVoJr5o3qeeHrDHxQr981K0uVHlTvN1/Zigp76vkDKLio6zEcK24Tb+Xfv3N9y7ioS3Ox4pSncH47jJsVdb7iV8flb3ih4EP+mWtVk76O93dJJWxc7nLqzNWa51uv4rdNik/vcuiuMmvetqiKT1eU6d7H7CZ/RdiVVrYCakVBcydM+MLoxYh0EZOea7ZN6XcHdbXXnFZTpd+aizsL3fQbK0L5tJ4qktcKnIlwsXng9wQfnhPA3v5t3NrHPaBRtHL0RAWu/+4q9IwQvat9fKKy6jGPcwHzF3wcwR0/e8pXvJxBF2/u2dOfPBA7jyOV8lM65+dP6aSM2N8/OkwWPDr89fNMVYWD6iHrjx78dkLl1MkE1O+e/FJ1+fHfPo5Ov3gc/bNn5BM1dH/54N778sH9L1oTKGzBHJS4hP//mjh0J84eXUHuwuWzZRmUuO/u1hiEFJ8KamdaqOyiWFwPP1dDzzeb2XwJ1zabEVJEG7fl0euZkv9FDYw27cxD0/MGDYyEZOFhq1ZPh3C2e9FCKM3erinWok6Di9uH8eNKLH4k5cJma8sbrZXemtni1Cu3brTWiR+nB4yLs0MUf9FZ8LvmfYUTff92hLPIyfZq3teJHbT1t20O633bHN6laavlDSGrcsljiPVQQumb2KGnI/vUOpMdT9SJm1+1znyIn5+dJCKMMfpm45yKD0iUOOcc6Jm5GkqIbQZZXl6qJHqENtIoqS5lngXmqnas/wFYdmloAJoy9AAAAABJRU5ErkJggg=="
                }
              ></Image>
              <Text className="skills-card-name">MongoDb</Text>
            </Flex>
          </Grid>
        </Box>
        <Box
          w={{ base: "100%", lg: "48%" }}
          mt={{ base: "20px", lg: "0px" }}
          borderRadius={"12px"}
          p={{ base: "5px", sm: "5px", lg: "5px" }}
          boxShadow={"rgba(255, 255, 255, 0.35) 10px 5px 15px;"}
        >
          {/* here */}
          <Text fontSize={"23px"}>Developer Tools</Text>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                p={"1"}
                objectFit={"contain"}
                borderRadius={"10px"}
                src={
                  "https://cdn.dribbble.com/users/3139745/screenshots/12521453/media/a6553274140b496ee2c269445cea867b.png"
                }
              ></Image>
              <Text className="skills-card-name" width={"100px"}>
                Code....
              </Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                p={"1"}
                w="60%"
                h="60%"
                objectFit={"contain"}
                src={
                  "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png"
                }
              ></Image>
              <Text className="skills-card-name">Git</Text>
            </Flex>
            {/* <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                p={"1"}
                w="60%"
                h="60%"
                src={
                  "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"
                }
              ></Image>
              <Text className="skills-card-name">Figma</Text>
            </Flex> */}
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                w="60%"
                h="60%"
                src={
                  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/images/logo@3x.png"
                }
              ></Image>
              <Text className="skills-card-name">VS Code</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                src={"https://img.icons8.com/color/1x/redux.png"}
              ></Image>
              <Text className="skills-card-name">Redux</Text>
            </Flex>
            <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                justifyContent={"center"}
                src={"https://img.icons8.com/color/1x/chakra-ui.png"}
              ></Image>
              <Text className="skills-card-name">Chakra UI</Text>
            </Flex>

            {/* <Flex
              className="skills-card"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              textAlign={"center"}
              m="20px"
              border="1px solid white"
              borderRadius={"8px"}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              w="90px"
              h="90px"
            >
              <Image
                className="skills-card-img"
                justifyContent={"center"}
                src={"https://img.icons8.com/color/1x/chakra-ui.png"}
              ></Image>
              <Text className="skills-card-name">Chakra UI</Text>
            </Flex> */}
          </Grid>
        </Box>
      </Flex>
    </Center>
  );
}
