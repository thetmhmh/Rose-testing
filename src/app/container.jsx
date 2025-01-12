export default function Container(prop) {
  const { children, className } = prop;
  return <section className={`container ${className}`}>{children}</section>;
}
