'use client'

import { SerializedEditorState } from "lexical";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the context shape
interface EditorContextType {
  editorState: SerializedEditorState | null;
  setEditorState: (value: SerializedEditorState) => void;
}

// Create Context with default values
const EditorContext = createContext<EditorContextType | undefined>(undefined);

// Provider Component
export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [editorState, setEditorState] = useState<SerializedEditorState | null>(
    null
  );

  return (
    <EditorContext.Provider value={{ editorState, setEditorState }}>
      {children}
    </EditorContext.Provider>
  );
};

// Custom Hook for using the context
export const useEditorContext = (): EditorContextType => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
