"use client";

export default function ArchiveError({ error = new Error() }) {
  return (
    <div className="error">
      <h2>An Error Ocurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
