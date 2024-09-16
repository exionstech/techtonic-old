import { Box } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = ({ href, isActive, children, target, ...props }: any) => {
  return (
    <NextLink href={href} passHref target={target} className="hover-[#d3c7eb]">
      <Box
        color={isActive ? "#d3c7eb" : "white"}
        _hover={{ textDecor: "none", color: "#d3c7eb" }}
        {...props}
      >
        {children}
      </Box>
    </NextLink>
  );
};
