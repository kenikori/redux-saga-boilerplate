import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

import { BoxElement } from "../BoxElement/BoxElement";
import { Button } from "../Button/Button";

export function PostBox() {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Post card</Heading>
      </CardHeader>
      <CardBody>
        <BoxElement label="Title" value="post?.title" />
        <BoxElement label="Body" value="post?.body" />
        <BoxElement label="User" value="post?.user.name" />
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => {
            // dispatch(postActions.getPostDataRequest({ postId: 32 }));
          }}
          // isLoading={requestStatus === RequestTypes.loading}
        >
          Get post data
        </Button>
      </CardFooter>
    </Card>
  );
}
