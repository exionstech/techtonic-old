import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { featuresdata } from "../../../../data/featuredata";
import Container from "../../utility/Container";

const Features = () => {
  return (
    <Center width="full">
      <Box>
        <Container
          title="For Students. For Professional. For everyone."
          text="Get all the opportunities in one place. Join the community and grow together. Connect with proffessionals and grow."
        />
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="8"
          maxWidth="8xl"
          pt="5"
        >
          {featuresdata.map(({ title, description, Icon }, index) => (
            <Box
              position="relative"
              bgGradient={
                "linear(104.28deg, rgb(38, 34, 71) 1.24%, purple.500 32.96%, rgb(38, 34, 71) 68.22%)"
              }
              borderRadius="3xl"
              key={title}
            >
              <Box
                position="absolute"
                inset="1px"
                bgColor={"gray.800"}
                borderRadius="inherit"
              />
              <Stack position="relative" p="6" spacing="4">
                <Flex
                  boxSize="10"
                  borderRadius="full"
                  justifyContent="center"
                  alignItems="center"
                  bgColor={"gray.700"}
                  color="gray.500"
                >
                  <Icon size="27px" />
                </Flex>
                <Heading fontSize="lg" color={"gray.200"}>
                  {title}
                </Heading>
                <Text color="gray.500">{description}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default Features;
