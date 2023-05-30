import { Button, Center, Container, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    const emailProp = email.trim().toLocaleLowerCase();

    console.log(emailProp, password);
  };

  return (
    <Container maxW="md" marginTop={4}>
      <Center>
        <Heading>Sign in</Heading>
      </Center>
      <Input
        type="email"
        placeholder="Email"
        size="lg"
        mt={4}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        size="lg"
        mt={4}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Center>
        <Button mt={4} onClick={onClick}>
          Button
        </Button>
      </Center>
    </Container>
  );
}

export default SignIn;
