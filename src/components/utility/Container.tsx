import { BoxProps, Heading, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ContainerProps extends BoxProps {
  title: string;
  subtitle?: string;
  text: string;
}

const Container: FC<ContainerProps> = ({ title, subtitle, text, ...props }) => {
  return (
    <Stack spacing="4" maxW="container.md" mx="auto" pt="12" {...props}>
      {subtitle && (
        <Heading
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
          textTransform="uppercase"
          color="gray.500"
        >
          {subtitle}
        </Heading>
      )}
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        textAlign="center"
        bgGradient="linear(to-r, purple.500, cyan.500)"
        bgClip="text"
        textTransform="uppercase"
        lineHeight="1"
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="medium"
        textAlign="center"
        color={"gray.200"}
        letterSpacing="tight"
      >
        {text}
      </Text>
    </Stack>
  );
};

export default Container;
