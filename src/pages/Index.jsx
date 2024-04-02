import React from "react";
import { Box, VStack, Heading, Text, Image, HStack, Divider, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <HStack spacing={8} align="center">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jan_Rokita_Sejm_2016.JPG/1024px-Jan_Rokita_Sejm_2016.JPG" alt="Jan Maria Rokita" borderRadius="full" boxSize="150px" />
          <VStack align="start" spacing={2}>
            <Heading as="h1" size="2xl">
              Jan Maria Rokita
            </Heading>
            <Text fontSize="xl">Polish Politician</Text>
          </VStack>
        </HStack>

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text>Jan Maria Rokita is a prominent Polish politician, lawyer, and former member of the Sejm, the lower house of the Polish parliament. He has been actively involved in Polish politics since the 1990s and has held various positions in the government and political parties.</Text>
        </VStack>

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="xl">
            Skills
          </Heading>
          <HStack spacing={4} wrap="wrap">
            <Tag>Political Strategy</Tag>
            <Tag>Legislation</Tag>
            <Tag>Public Speaking</Tag>
            <Tag>Negotiation</Tag>
            <Tag>Leadership</Tag>
          </HStack>
        </VStack>

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
          <ProjectCard title="Civic Platform Party" description="Served as a prominent member of the Civic Platform party and held various leadership positions." link="https://en.wikipedia.org/wiki/Civic_Platform" />
          <ProjectCard title="Parliamentary Work" description="Actively participated in parliamentary committees and contributed to the development of important legislation." link="https://en.wikipedia.org/wiki/Jan_Maria_Rokita#Parliamentary_career" />
        </VStack>

        <Divider />

        <HStack spacing={4} justify="center">
          <Link href="https://github.com/janrokita" isExternal>
            <Icon as={FaGithub} boxSize={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/janrokita" isExternal>
            <Icon as={FaLinkedin} boxSize={8} />
          </Link>
          <Link href="mailto:jan.rokita@example.com" isExternal>
            <Icon as={FaEnvelope} boxSize={8} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

const Tag = ({ children }) => (
  <Box backgroundColor="gray.200" borderRadius="md" paddingX={2} paddingY={1}>
    <Text>{children}</Text>
  </Box>
);

const ProjectCard = ({ title, description, link }) => (
  <Box borderWidth={1} borderRadius="md" padding={4}>
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text marginTop={2}>{description}</Text>
    <Link href={link} isExternal marginTop={2} color="blue.500">
      View Project
    </Link>
  </Box>
);

export default Index;
