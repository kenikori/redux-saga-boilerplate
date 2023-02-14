import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userActions } from "../../redux/user/user.reducer";
import { BoxElement } from "../BoxElement/BoxElement";
import { Button } from "../Button/Button";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const UserBox = () => {
  const dispatch = useAppDispatch();

  const isRequesting = useAppSelector((state) => state.user.isRequesting);
  const errorMessage = useAppSelector((state) => state.user.errorMessage);
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="box">
      <Button
        label="Get user data"
        onClick={() => {
          dispatch(userActions.getUserDataRequest({ userId: 1 }));
        }}
        disabled={isRequesting}
      />

      <ErrorMessage message={errorMessage} />

      <BoxElement label="Name" value={user?.name} />
    </div>
  );
};
