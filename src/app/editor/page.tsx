"use client";

import EditorComponent from "@/components/editor/editor-wrapper";
import Title from "@/components/editor/title";
import { Button } from "@/components/ui/button";
import { useEditorContext } from "@/contexts/editor-context";
import { useState } from "react";

export default function Editor() {
  const isFresh = true; // TODO: check if the editor is fresh
  const { editorState } = useEditorContext();
  const [title, setTitle] = useState("");

  function handleSave() {
    console.log("SAVING", editorState);
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("Title change", e.target.value);
    setTitle(e.target.value);
  }

  return (
    <div className="flex flex-col items-center gap-y-3">
      <Title
        title={title}
        isFresh={isFresh}
        onChange={handleTitleChange}
        onEdit={() => setTitle("")}
      />

      <EditorComponent />
      <Button variant={"writeAway"} onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
