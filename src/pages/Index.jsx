import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="md">Stay tuned for more updates!</Text>
        <Link as={RouterLink} to="/add-post" color="teal.500">
          Add New Post
        </Link>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            {post.imageUrl && <Image src={post.imageUrl} alt={post.title} mt={4} />}
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;