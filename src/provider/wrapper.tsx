import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box bgColor={"gray.800"}>
      <Navbar />
      <Container maxW="8xl" mx="auto" px={{ base: "4", lg: "6" }}>
        <Box pt="8">{children}</Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Wrapper;
