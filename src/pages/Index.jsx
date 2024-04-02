import React from "react";
import { Box, VStack, Heading, Text, Image, HStack, Divider, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <HStack spacing={8} align="center">
          <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwSmFuJTIwTWFyaWElMjBSb2tpdGF8ZW58MHx8fHwxNzEyMDU0OTEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Jan Maria Rokita" borderRadius="full" boxSize="150px" />
          <VStack align="start" spacing={2}>
            <Heading as="h1" size="2xl">
              Jan Maria Rokita
            </Heading>
            <Text fontSize="xl">Software Engineer & Web Developer</Text>
          </VStack>
        </HStack>

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text>I am a passionate software engineer with expertise in web development. I enjoy building scalable and user-friendly applications using modern technologies. My goal is to create impactful solutions that solve real-world problems.</Text>
        </VStack>

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="xl">
            Skills
          </Heading>
          <HStack spacing={4} wrap="wrap">
            <Tag>JavaScript</Tag>
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Git</Tag>
            <Tag>Agile</Tag>
          </HStack>
        </VStack>

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="xl">
            Projects
          </Heading>
          <ProjectCard title="E-commerce Website" description="Developed a full-stack e-commerce website using React, Node.js, and MongoDB." link="https://github.com/janrokita/ecommerce" />
          <ProjectCard title="Task Manager App" description="Created a task management application with user authentication and real-time updates." link="https://github.com/janrokita/taskmanager" />
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
