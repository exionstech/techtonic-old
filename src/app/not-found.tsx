import { Box, Center } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import Container from "../components/utility/Container";
import { Link } from "../components/utility/Link";
import Wrapper from "../provider/wrapper";

export default function NotFound() {
  return (
    <Wrapper>
      <Box py="12rem" marginTop={{ base: "0", lg: "40" }}>
        <Container
          title="Page Not Found"
          subtitle="Sorry,"
          text="Please go back to the main page"
        />
        <Center>
          <Link href="/">
            <RiArrowRightLine />
          </Link>
        </Center>
      </Box>
    </Wrapper>
  );
}
