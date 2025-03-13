import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useState } from "react";
import { $getRoot } from "lexical";

const WordCountPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const text = $getRoot().getTextContent();
        const words = text.trim().split(/\s+/).filter(Boolean);
        setWordCount(words.length);
      });
    });
  }, [editor]);

  return <div>Word Count: {wordCount}</div>;
};

export default WordCountPlugin;
