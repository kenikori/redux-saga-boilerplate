export function BoxElement({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  return (
    <div className="box-element">
      <span className="box-element-label">{label}:</span>
      <span className="box-element-value">{value ?? "-"}</span>
    </div>
  );
}
