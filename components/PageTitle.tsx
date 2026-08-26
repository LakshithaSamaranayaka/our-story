export default function PageTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h1 className="text-5xl text-center font-semibold tracking-wide mb-6">
      {title}
    </h1>
  );
}