import {
  Box,
  Button,
  Center,
  Heading,
  LightMode,
  SimpleGrid,
  Text,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { ctaSecondary } from "utils/cta";
import content from "../../content";

export const Hero = () => {
  return (
    <Box
      as="section"
      minH="90vh"
      bg="gray.800"
      py="12"
      position="relative"
      h={{ base: "100vh", md: "95vh" }}
      bgImage="/hero.jpg"
      bgSize="cover"
      bgPosition={{ base: "55% 25%", md: "center" }}
      _after={{
        content: `""`,
        display: "block",
        w: "full",
        h: "full",
        bg: "blackAlpha.400",
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center
          flexDirection="column"
          textAlign="center"
          color="white"
          h="full"
          pt="40vh"
        >
          <Heading size={"xl"} fontWeight="extrabold">
            {content.hero.title}
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3">
            {content.hero.titleHighlighted}
          </Text>
          <LightMode>
            <Button
              onClick={ctaSecondary}
              colorScheme={content.colors.scheme}
              size="lg"
              mt="6"
              fontWeight="bold"
              fontSize="md"
              rounded="full"
            >
              Conhecer meu trabalho
            </Button>
          </LightMode>
        </Center>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        zIndex={2}
        w="full"
        bottom="0"
        py="4"
        bg="blackAlpha.400"
      ></Box>
    </Box>
  );
};
