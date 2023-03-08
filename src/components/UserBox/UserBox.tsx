import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userActions } from "../../redux/user/user.reducer";
import { RequestTypes } from "../../types/request.types";
import { BoxElement } from "../BoxElement/BoxElement";
import { Button } from "../Button/Button";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export function UserBox() {
  const dispatch = useAppDispatch();

  const requestStatus = useAppSelector((state) => state.user.requestStatus);
  const errorMessage = useAppSelector((state) => state.user.errorMessage);
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="box">
      <Button
        label="Get user data"
        onClick={() => {
          dispatch(userActions.getUserDataRequest({ userId: 1 }));
        }}
        disabled={requestStatus === RequestTypes.loading}
      />

      <ErrorMessage message={errorMessage} />

      <BoxElement label="Name" value={user?.name} />
    </div>
  );
}
