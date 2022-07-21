import {
  Box,
  Button,
  Flex,
  Heading,
  HeadingProps,
  HStack,
  Img,
  Stack,
  StackProps,
  Text,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { cta } from "utils/cta";
import content from "../../content";

const MotionHeading = motion<HeadingProps>(Heading);
const MotionText = motion<TextProps>(Text);
const MotionStack = motion<StackProps>(Stack);

export const Presentation = () => {
  return (
    <Flex
      bg="gray.800"
      as="section"
      minH="140px"
      position="relative"
      id="about"
    >
      <Flex py="32" position="relative" zIndex={1}>
        <Flex
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
          alignItems={"center"}
        >
          <Flex maxW="xl">
            <MotionHeading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              whileInView={{ x: [-24, 0], opacity: [0, 1] }}
              // @ts-ignore
              transition={{ duration: 1 }}
            >
              {content.presentation.title}
            </MotionHeading>
            <MotionText
              fontSize={{ md: "lg" }}
              color="whiteAlpha.800"
              mt="4"
              maxW="lg"
              whiteSpace="break-spaces"
              whileInView={{ x: [-24, 0], opacity: [0, 1] }}
              // @ts-ignore
              transition={{ duration: 1, duration: 0.4 }}
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
                Agendar consulta/exame
              </Button>
            </MotionStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Flex position="relative" w="full" h="full">
          <Img
            src={useBreakpointValue({ base: "/hero1.jpg", md: "/pres.jpg" })}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition={useBreakpointValue({
              base: "top center",
              md: "25% 35%",
            })}
            position="absolute"
          />
          <Flex position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Flex>
      </Flex>
    </Flex>
  );
};
