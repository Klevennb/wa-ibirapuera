'use client'

import EditorComponent from '@/components/editor/editor-wrapper'
import { Button } from '@/components/ui/button'
import { useEditorContext } from '@/contexts/editor-context';

interface EditorProps {
    isFresh: boolean
}

export default function Editor (props: EditorProps) {
    const { isFresh } = props
    const { editorState } = useEditorContext()

    function handleSave() {
        console.log('SAVING', editorState);
    }


    return(
        <div className='flex-col'>
            <EditorComponent/>
            <Button variant={'writeAway'} onClick={handleSave}>Save</Button>
        </div>
    )
}