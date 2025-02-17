import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import * as actions from "@/actions";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="border rounded p-4 my-4 flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">{snippet?.title}</h3>
        <pre className="bg-gray-200 border-gray-200 text-black p-3  border rounded">
          <code>{snippet?.code}</code>
        </pre>
        <Link
          href={`/snippets/${snippet.id}/edit`}
          className="border rounded p-2"
        >
          Edit
        </Link>
        <form className="border rounded p-2" action={deleteSnippetAction}>
          <button> Delete </button>
        </form>
      </div>
      <Link href="/" className="border rounded p-2  text-center">
        Home
      </Link>
    </div>
  );
}
