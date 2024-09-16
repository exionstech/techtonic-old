import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import OpportunityCard from "../../Cards/OpportunityCard";
import Container from "../../utility/Container";
import { Link } from "../../utility/Link";

const Opportunity = () => {
  return (
    <Box py="10">
      <Container
        subtitle="Latest Opportunities"
        title="Align with your skill"
        text="All the latest opportunities are here, you can visit to Opportunities section for the All opportunities."
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing="5"
        maxWidth="8xl"
        pt="5"
        px="0"
      >
        {Array.from({ length: 8 }).map((_, index) => (
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
          <Link href="/opportunities">Show All</Link>
        </Button>
      </Text>
    </Box>
  );
};

export default Opportunity;
