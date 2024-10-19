export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-w-64 max-w-64 mx-auto">{children}</div>
  );
}
