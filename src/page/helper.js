import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  Heading,
  Code,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function HelperProject({ image, title, techStack, desc, github, deploy }) {
  return (
    <Box
      border={"1px solid teal"}
      className="project-card"
      maxW="sm"
      m="auto"
      width={{ base: "100%", md: "100%", lg: "100%" }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="10px"
    >
      <Box
        height={{ base: "100%", md: "60%", lg: "100%" }}
        width={{ base: "100%", md: "100%", lg: "100%" }}
        borderRadius="lg"
        overflow="hidden"
      >
        <Link
          height={{ base: "100%", md: "60%", lg: "100%" }}
          width={{ base: "100%", md: "100%", lg: "100%" }}
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Image
            transform="scale(1.0)"
            src={image}
            alt="some text"
            objectFit="contain"
            height={{ base: "100%", md: "50%", lg: "10%" }}
            maxW={{ base: "100%", md: "100%", lg: "100%" }}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Link>
      </Box>

      <Box p="4">
        <Box display="flex" flexWrap={"wrap"} alignItems="baseline">
          {techStack?.map((el, ind) => {
            return (
              <Code
                mr="10px"
                fontSize={{ base: "14px", md: "10px", lg: "12px" }}
                borderRadius="50px"
                px={{base:"5px",md:"5px",lg:"8px"}}
                mb="2px"
                colorScheme={"teal"}
              >
                <Badge
                  class="project-tech-stack"
                  key={ind + Date.now()}
                  borderRadius="full"
                  colorScheme="teal"
                >
                  {el}{" "}
                </Badge>
              </Code>
            );
          })}
        </Box>
        <Text
          mt="4"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
          textAlign="left"
          className="project-title"
        >
          {title}
        </Text>

        <Text
          mt="4"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
          textAlign="left"
          className="project-description"
        >
          {desc}
        </Text>

        <Flex mt={"4"} justifyContent={"space-between"}>
          <Link class="project-github-link" href={github} isExternal>
            <Button
              size={{ base: "sm", md: "sm", lg: "sm" }}
              colorScheme="teal"
              variant="solid"
            >
              <Text mr={"4px"}>GitHub</Text>
              <BsGithub />
            </Button>
          </Link>

          <Link class="project-deployed-link" href={deploy} isExternal>
            <Button size="sm" colorScheme="teal" variant="outline">
              <Text mr={"5px"}>Deployed Link</Text>
              <BiLinkExternal />
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default HelperProject;
