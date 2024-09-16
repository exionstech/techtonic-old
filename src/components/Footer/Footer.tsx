"use client";
import data from "../../../data/navdata";
import Socials from "../utility/Socials";
import { Box, Container, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import logo from "/public/logo.png";
import { Link } from "../utility/Link";

export default function Footer() {
  return (
    <VStack
      alignItems="center"
      spacing="5"
      borderTop="1px"
      borderColor={"gray.700"}
      mt="12"
      py="5"
    >
      <Box bg={"dark"} color={"dark"} py={5} mt={30}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Image src={logo} height={100} width={100} alt="company" />
          <Flex>
            <Stack listStyleType="none" direction="row" spacing="6">
              {data.map((data) => (
                <Box key={data.path}>
                  <Link href={data.path} target={data.target}>
                    {data.title}
                  </Link>
                </Box>
              ))}
            </Stack>
          </Flex>
        </Container>
        <Box
          borderTopWidth={10}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          maxW="8xl"
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© 2024 TechTonic Community.</Text>
            <Stack direction={"row"} spacing={6}>
              <Socials />
            </Stack>
          </Container>
        </Box>
      </Box>
    </VStack>
  );
}
