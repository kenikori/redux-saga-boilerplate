import axios from "axios";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.post(
    `https://koki-terminal-staging.herokuapp.com/api/v1/auth/sign-in`,
    { identifier: email, password }
  );

  return data;
};
