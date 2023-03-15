import { useToast, UseToastOptions } from "@chakra-ui/react";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toastActions } from "../../redux/toast/toast.reducer";

export const toastConfig: UseToastOptions = {
  isClosable: true,
  variant: "solid",
  position: "bottom",
};

export function Toast(): null {
  const dispatch = useAppDispatch();
  const toast = useToast(toastConfig);

  const toastOptions = useAppSelector((state) => state.toast.options);

  useEffect(() => {
    if (toastOptions !== undefined) {
      toast(toastOptions);
      dispatch(toastActions.resetToast());
    }
  }, [toastOptions, toast, dispatch]);

  return null;
}
