import { db } from "@/db";
import Link from "next/link";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="flex items-center p-2 border rounded justify-between my-2"
      >
        <h3 className="font-bold">{snippet.title}</h3>

        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border border-rounded p-2 ">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
