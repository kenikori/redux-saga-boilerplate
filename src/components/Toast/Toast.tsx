import { useToast, UseToastOptions } from "@chakra-ui/react";
import { useEffect } from "react";

export const toastConfig: UseToastOptions = {
  isClosable: true,
  variant: "solid",
  position: "bottom",
};

export function Toast(): null {
  const toast = useToast(toastConfig);

  useEffect(() => {
    toast({
      title: "An error occurred.",
      description: "Unable to create user account.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    // if (toastOptions !== undefined) {
    // toast(toastOptions);
    // dispatch(toastActions.resetToast());
    // }
  }, [toast]);

  return null;
}
