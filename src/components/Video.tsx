import { AspectRatio, Box, Divider, Flex, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";

export const Video = () => {
  return (
    <Box as="section" py="40">
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
        <Flex
          align={{ lg: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            flex="1"
            pos="relative"
            as="button"
            aria-label="Play Testimonial video"
            justifyItems={"center"}
            alignItems={"center"}
            alignSelf={"center"}
          >
            <AspectRatio ratio={16 / 9} w={"100%"} minW={"300px"}>
              <iframe
                src="https://www.youtube.com/embed/rlo66aegGHc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </Box>
          <Box
            flex="1"
            paddingStart={{ md: "16" }}
            paddingEnd={{ md: "12" }}
            mt={{ base: "8", md: "0" }}
          >
            <Stack
              align={{ base: "flex-start", lg: "center" }}
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: "2", lg: "4" }}
            >
              <Box as="h5" color="gray.500" fontSize="lg">
                Dr. Daniel Martins, Cirurgia Geral Endoscopia-Gastroenterologia
              </Box>
              <Box h="4" display={{ base: "none", lg: "block" }}>
                <Divider orientation="vertical" />
              </Box>
            </Stack>
            <Box
              mt="4"
              fontSize={{ base: "xl", lg: "2xl" }}
              whiteSpace={"break-spaces"}
              as="blockquote"
            >
              {`Área de atuação: gastroenterologia.
Títulos: cirurgia geral e endoscopia digestiva.
Consulta focada em diagnósticar e prevenir as dores abdominais.
Exames: Endoscopia, Colonoscopia, COLANGIOPANCREATOGRAFIA RETROGRADA ENDOSCÓPICA (CPRE)`}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
