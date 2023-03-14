import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userActions } from "../../redux/user/user.reducer";
import { RequestTypes } from "../../types/request.types";
import { BoxElement } from "../BoxElement/BoxElement";
import { Button } from "../Button/Button";

export function UserBox() {
  const dispatch = useAppDispatch();

  const requestStatus = useAppSelector((state) => state.user.requestStatus);
  const user = useAppSelector((state) => state.user.user);

  return (
    <Card>
      <CardHeader>
        <Heading size="md">User card</Heading>
      </CardHeader>
      <CardBody>
        <BoxElement label="Name" value={user?.name} />
      </CardBody>

      <CardFooter>
        <Button
          onClick={() => {
            dispatch(userActions.getUserDataRequest({ userId: 1 }));
          }}
          isLoading={requestStatus === RequestTypes.loading}
        >
          Get user data
        </Button>
      </CardFooter>
    </Card>
  );
}
