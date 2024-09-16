import { navsocial } from "../../../data/navdata";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "./Link";

const Socials = () => {
  return (
    <Flex pl="4" alignItems="center" gap="3">
      {navsocial.map(({ path, title, Icon }) => (
        <Link href={path} target="_blank" key={title}>
          <Box mt="2px" _hover="#d3c7eb">
            <Icon size="25" />
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default Socials;
