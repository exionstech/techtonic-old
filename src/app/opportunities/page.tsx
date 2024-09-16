import OpportunityCard from "@/src/components/Cards/OpportunityCard";
import Container from "@/src/components/utility/Container";
import Wrapper from "@/src/provider/wrapper";
import { Box, Button, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";

const page = () => {
  return (
    <Wrapper>
      <Box pt="5">
        <Container
          subtitle="Opportunities, Your are looking for"
          title="Everything is here,"
          text="Find best suits according to you.."
        />
        <Flex pt="10" maxW="5xl" gap="5" textAlign="center" mx="auto">
          <Input placeholder="Job Profile" width="auto" />
          <Input placeholder="Location" width="auto" />
          <Input placeholder="Work Type" width="auto" />
          <Button colorScheme="blue" width="auto">
            Apply
          </Button>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing="5"
          maxWidth="8xl"
          pt="5"
          px="0"
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <OpportunityCard key={index} />
          ))}
        </SimpleGrid>
        <Text textAlign="center" pt="10">
          <Button
            variant="outline"
            colorScheme="gray"
            color="white"
            _hover={{ colorScheme: "black" }}
          >
            Show More..
          </Button>
        </Text>
      </Box>
    </Wrapper>
  );
};

export default page;
