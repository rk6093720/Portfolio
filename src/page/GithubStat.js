import React from 'react'
import { Box, Container, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const GithubStat = () => {
  const githubUsername = "rk6093720";
  return (
    <Container
      // border={{
      //   base: "1px solid red",
      //   sm: "1px solid green",
      //   lg: "1px solid blue",
      // }}
      maxW={{ base: "98%", sm: "80%", lg: "80%" }}
      marginTop={{ base: "100px", md: "130px", lg: "130px" }}
      textAlign={{ base: "center", md: "center", lg: "center" }}
      marginLeft={{ base: "0.2em", sm: "5em", lg: "8em" }}
    >
      <Heading>GitHub Stats</Heading>
      <Stack>
        <Box
          className="react-activity-calendar"
          margin={{ base: "auto", md: "auto", lg: "auto" }}
          marginTop={{ base: "50px", md: "50px", lg: "50px" }}
          marginBottom={{ base: "40px", md: "40px", lg: "40px" }}
          maxW={{ base: "100%", md: "100%", lg: "100%" }}
          // border={"1px solid blue"}
        >
          <Link href={`https://github.com/${githubUsername}`} target="_blank">
            <GitHubCalendar
              w={{ base: "100%", md: "100%", lg: "100%" }}
              username={githubUsername}
            />
          </Link>
        </Box>
        <Flex
          w={{ base: "100%", md: "100%", lg: "100%" }}
          m="auto"
          justifyContent={{ base: "center", md: "space-around" }}
          marginTop="30px"
          direction={{ base: "column", md: "row",lg:"row" }}
        >
          <Link
            w={{ base: "100%", md: "33%" }}
            mt={{ base: "10px", md: "0px" }}
            href={`https://github.com/${githubUsername}`}
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com/?user=rk6093720"
              />
            </Flex>
          </Link>

          <Link
            w={{ base: "100%", md: "30%" }}
            mt={{ base: "10px", md: "0px" }}
            href={`https://github.com/${githubUsername}`}
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-top-langs"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&show_icons=true&locale=en&layout=compact`}
              />
            </Flex>
          </Link>

          <Link
            w={{ base: "100%", md: "31%" }}
            mt={{ base: "10px", md: "0px" }}
            href={`https://github.com/${githubUsername}`}
            target="_blank"
          >
            <Flex justifyContent={"center"}>
              <Image
                id="github-stats-card"
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en`}
              />
            </Flex>
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
}

export default GithubStat
