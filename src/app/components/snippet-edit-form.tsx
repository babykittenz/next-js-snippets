"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  //update db with the change
  const handleEdiorChange = async (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = () => actions.editSnippet(snippet.id, code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEdiorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="rounded p-2 border">
          Save
        </button>
      </form>
    </div>
  );
}
