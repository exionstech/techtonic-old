import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "../utility/Link";

const OpportunityCard = () => {
  return (
    <Box
      position="relative"
      bgGradient={
        "linear(150.28deg, rgb(38, 34, 71) 4.24%, gray 40.96%, rgb(38, 34, 71) 99%)"
      }
      borderRadius="lg"
      key="da"
    >
      <Box
        position="absolute"
        inset="1px"
        bgColor={"gray.800"}
        borderRadius="inherit"
      />
      <Stack position="relative" p="6" spacing="4">
        <Flex>
          <Heading fontSize="lg" color={"gray.200"}>
            Job Title
          </Heading>
          <Spacer />
          <Code>Job Type</Code>
        </Flex>
        <Text color="gray.400">Company Name</Text>
        <Text color="gray.500">Location</Text>
        <Text color="gray.500">Salary</Text>
        <Text color="gray.500">Contract</Text>
        <Button
          rightIcon={<RiArrowRightLine />}
          variant="outline"
          colorScheme="gray"
          color="white"
          _hover={{ colorScheme: "black" }}
        >
          <Link href="/opportunities">Apply Now</Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default OpportunityCard;
