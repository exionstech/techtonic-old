import Wrapper from "../../provider/wrapper";
import Container from "../../components/utility/Container";
import { Box, Text } from "@chakra-ui/react";

const page = () => {
  return (
    <Wrapper>
      <Box py="5">
        <Container
          subtitle="Who are We?"
          title="About TechTonic Community"
          text="We are one of job search site to help students or working professional finding their dream job or internship, without any scam happening to them."
        />
        <Container
          subtitle="Our Vision"
          title=""
          text="Our Vission is simple, we dream to help professionals and students to pursue their career without scamming and with right knowledge and right path."
        />
        <Container subtitle="" title="Let's Connect together.." text="" />
      </Box>
    </Wrapper>
  );
};

export default page;
