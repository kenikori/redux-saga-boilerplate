export const ErrorMessage = ({ message }: { message: string | undefined }) => {
  if (!message) {
    return null;
  }

  return <div className={`error-message`}>{message}</div>;
};
