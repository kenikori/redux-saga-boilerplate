export const ErrorMessage = ({ message }: { message: string | undefined }) => {
  return message ? <div className={`error-message`}>{message}</div> : null;
};
