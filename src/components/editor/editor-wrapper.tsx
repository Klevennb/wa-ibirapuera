"use client";

import { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// import { EditorTheme } from "./theme"; // Optional for further styling

// Handle editor state changes
const onChange = (editorState: EditorState) => {
  editorState.read(() => {
    console.log(JSON.stringify(editorState.toJSON())); // Log state
  });
};

// Auto-focus plugin
const AutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.focus();
  }, [editor]);
  return null;
};

// Editor configuration
const editorConfig = {
  namespace: "MyEditor",
//   theme: EditorTheme,
  onError(error: Error) {
    console.error(error);
  },
  editorState: null,
};

export default function LexicalEditor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="relative w-full max-w-2xl mx-auto bg-white border border-gray-300 shadow-lg rounded-xl p-4">
        {/* Editor Content */}
        <div className="relative min-h-[250px] p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="w-full min-h-[200px] outline-none bg-transparent text-gray-800 text-base leading-relaxed" />
            }
            placeholder={<div className="absolute top-4 left-4 text-gray-400">Start typing...</div>}
            ErrorBoundary={(error) => <div>Error: {error.children}</div>}
          />
          <OnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
