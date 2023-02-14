export const Button = ({
  label,
  disabled = false,
  onClick = () => {},
}: {
  label: string;
  disabled?: boolean;
  onClick?(): void;
}) => {
  const disabledCss = disabled ? " disabled" : "";

  return (
    <button
      type="button"
      className={`button${disabledCss}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
