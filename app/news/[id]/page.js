export default function NewsDetail({ params }) {
  const id = params.id;
  return (
    <main>
      <h1>{id}</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </main>
  );
}
