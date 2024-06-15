import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="md">Stay tuned for more updates!</Text>
        <Link href="https://example.com" color="teal.500" isExternal>
          Visit my profile
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;