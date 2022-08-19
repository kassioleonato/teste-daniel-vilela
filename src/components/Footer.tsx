import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { BsInstagram, BsPen, BsPhone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import content from "../../content";

export const Footer = () => (
  <Box bg={content.colors.primaryDark} color="on-accent">
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "6" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Text
            color="white"
            as="a"
            target="_blank"
            href={content.footer.addressLink}
            rel="noopener noreferrer"
            _hover={{ textDecoration: "underline" }}
          >
            <FiMapPin fontSize={40} />
            <br />
            {content.footer.address}
          </Text>
        </Stack>
        <ButtonGroup variant="ghost-on-accent">
          <IconButton
            as="a"
            href={content.social.instagramLink}
            target="_blank"
            aria-label="Instagram"
            icon={<BsInstagram fontSize="1.25rem" color="white" />}
          />
          <IconButton
            as="a"
            href={`tel:${content.social.whatsAppNumber}`}
            aria-label="Phone Call"
            icon={<BsPhone fontSize="1.25rem" color="white" />}
          />
          {content.social.email && (
            <IconButton
              as="a"
              href={`mailto:${content.social.email}`}
              aria-label="Write Email"
              icon={<BsPen fontSize="1.25rem" color="white" />}
            />
          )}
        </ButtonGroup>
        <Text fontSize="md" color="whiteAlpha.800">
          &copy; {new Date().getFullYear()} - Além Da Medicina / MCP.
          <br />
          Desenvolvido com ❤️ pela{" "}
          <Text
            as="a"
            target="_blank"
            textDecoration="underline"
            textUnderlineOffset={"4px"}
            href="https://www.hubxp.com.br?utm_source=mcp"
          >
            hub xp
          </Text>
          .
        </Text>
        <Text color="whiteAlpha.500">Todos os direitos reservados.</Text>
      </Stack>
    </Container>
  </Box>
);
