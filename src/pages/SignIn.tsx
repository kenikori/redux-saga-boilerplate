import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { signIn } from "../api/api";
import { loginSchema, LoginSchemaType } from "../types/schema/login.schema";

function SignIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  // Mutations
  const mutation = useMutation(
    signIn /* , {
    onSuccess: (props) => {
      console.log("onSuccess", props);
      // Invalidate and refetch
      // queryClient.invalidateQueries("todos");
    },
  } */
  );

  const onSubmit: SubmitHandler<LoginSchemaType> = (formdata) => {
    mutation.mutate({ email: formdata.email, password: formdata.password });
  };

  return (
    <Container maxW="md" marginTop={4}>
      <Center>
        <Heading>Sign in</Heading>
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email !== undefined}>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            size="lg"
            mt={4}
            {...register("email")}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={errors.password !== undefined}>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            size="lg"
            mt={4}
            {...register("password")}
          />
          {errors.password && (
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          )}
        </FormControl>
        <Center>
          <Button type="submit" mt={4} disabled={mutation.isLoading}>
            Button
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default SignIn;
