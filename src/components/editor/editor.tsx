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
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b pb-2 mb-2">
          <h2 className="text-lg font-semibold text-gray-700">Lexical Editor</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
              Bold
            </button>
            <button className="px-3 py-1 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition">
              Italic
            </button>
          </div>
        </div>

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
