import { Box, Center, Container } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../components/ColorModeSwitcher/ColorModeSwitcher";
import { PostBox } from "../components/PostBox/PostBox";
import { UserBox } from "../components/UserBox/UserBox";

function Home() {
  return (
    <Container maxW="md" marginTop={4}>
      <Center>
        <ColorModeSwitcher />
      </Center>

      <Box maxW="md" margin={2}>
        <UserBox />
      </Box>

      <Box maxW="md" margin={2}>
        <PostBox />
      </Box>
    </Container>
  );
}

export default Home;
