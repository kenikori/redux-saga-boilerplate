import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { postActions } from "../../redux/post/post.reducer";
import { BoxElement } from "../BoxElement/BoxElement";
import { Button } from "../Button/Button";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const PostBox = () => {
  const dispatch = useAppDispatch();

  const isRequesting = useAppSelector((state) => state.post.isRequesting);
  const errorMessage = useAppSelector((state) => state.post.errorMessage);
  const post = useAppSelector((state) => state.post.post);

  return (
    <div className="box">
      <Button
        label="Get post data"
        onClick={() => {
          dispatch(postActions.getPostDataRequest({ postId: 32 }));
        }}
        disabled={isRequesting}
      />

      <ErrorMessage message={errorMessage} />

      <BoxElement label="Title" value={post?.title} />
      <BoxElement label="Body" value={post?.body} />
      <BoxElement label="User" value={post?.user.name} />
    </div>
  );
};
