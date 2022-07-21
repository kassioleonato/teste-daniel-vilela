import {
  Button,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Img,
  Stack,
  StackProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { cta } from "utils/cta";
import content from "../../content";

const MotionHeading = motion<HeadingProps>(Heading);
const MotionText = motion<TextProps>(Text);
const MotionStack = motion<StackProps>(Stack);
const MotionFlex = motion<FlexProps>(Flex);

export default function Aboutme() {
  return (
    <Flex
      maxW="7xl"
      m={"0 auto"}
      flexDir={{ base: "column", lg: "row" }}
      id="about"
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        id="image-wrapper"
        w={{ base: "100%", xl: "50%" }}
      >
        <Flex w="full" h="full" alignItems={"center"} justifyItems={"center"}>
          <Flex m={"0 auto"} maxW={"650px"} maxH={"1050"} w="full" h="full">
            <Img src={"pres.jpg"} alt="Main Image" objectFit="cover" />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDir={"column"}
        p={{ base: "7", md: "9" }}
        color="blackAlpha.800"
        w={{ base: "100%", xl: "50%" }}
      >
        <MotionHeading as={"h4"} size={"sm"}>
          Sobre
        </MotionHeading>
        <MotionHeading
          as="h1"
          size="lg"
          fontWeight="extrabold"
          whileInView={{ x: [-24, 0], opacity: [0, 1] }}
          // @ts-ignore
          transition={{ duration: 1 }}
        >
          {content.presentation.title}
        </MotionHeading>
        <MotionText
          fontSize={{ md: "lg" }}
          color="blackAlpha.800"
          maxW="lg"
          whiteSpace="break-spaces"
          whileInView={{ x: [-24, 0], opacity: [0, 1] }}
          // @ts-ignore
          transition={{ duration: 1, duration: 0.4 }}
          lineHeight="1.9"
        >
          {content.presentation.content}
        </MotionText>
        <MotionStack
          direction={{ base: "column", md: "row" }}
          mt="10"
          spacing="4"
          whileInView={{ x: [-24, 0], opacity: [0, 1] }}
          // @ts-ignore
          transition={{ duration: 1, duration: 0.8 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            as="a"
            href="#"
            bgColor={content.colors.buttonCollor}
            color="white"
            _hover={{
              cursor: "pointer",
              bg: content.colors.primary,
            }}
            px="8"
            rounded="full"
            size="lg"
            fontSize="md"
            fontWeight="bold"
            onClick={cta}
          >
            Marcar consulta
          </Button>
        </MotionStack>
      </Flex>
    </Flex>
  );
}
