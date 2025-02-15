'use client'

import EditorComponent from '@/components/editor/editor-wrapper'
import { Button } from '@/components/ui/button'
import { EditorState } from 'lexical';
import useEditorContents from '../hooks/useSaveEditor';
import { useEditorContext } from '@/contexts/editor-context';

interface EditorProps {
    isFresh: boolean
    // data?: any 
}

export default function Editor (props: EditorProps) {
    const { isFresh } = props
    const { editorState } = useEditorContext()

    function handleSave() {
        console.log('SAVING', editorState);
    }


    return(
        <div>
            <EditorComponent/>
            <Button onClick={handleSave}>Save</Button>
        </div>
    )
}