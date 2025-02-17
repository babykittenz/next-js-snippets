import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/app/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const { id } = await props.params;

  const snippetId = parseInt(id);
  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet}></SnippetEditForm>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({
    // our ids are numbers so we convert them to strings
    id: snippet.id.toString(),
  }));
}
