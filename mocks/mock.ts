import { UUID } from "crypto"
import { SerializedEditorState } from "lexical"

type MockEntry= {
    id: UUID
    title: string
    startTime: number
    endTime: number
    prompt: UUID
    entry: SerializedEditorState
    public: boolean
    nsfw: boolean
    linkedTo: UUID[]
    author: UUID
    wordCount: number
}

enum PromptTypes {
    SCIFI = 'SCIFI',
    FANTASY = 'FANTASY',
    MYSTERY = 'MYSTERY'
}

type MockPrompt = {
    id: UUID
    prompt: string
    promptType: PromptTypes
    visible: boolean
}

const mockEntry: MockEntry = {
    id: '123e4567-e89b-12d3-a456-426614174000' as UUID,
    title: 'Sample Title',
    startTime: 1739759109 ,
    endTime: 1739759909 , 
    prompt: '123e4567-e89b-12d3-a456-426614174001' as UUID,
    entry: {
        root: {
            children: [],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1
        }
    } as SerializedEditorState,
    public: true,
    nsfw: false,
    linkedTo: ['123e4567-e89b-12d3-a456-426614174002'] as UUID[],
    author: '123e4567-e89b-12d3-a456-426614174003' as UUID,
    wordCount: 100
};

const mockPrompt: MockPrompt = {
    id: '123e4567-e89b-12d3-a456-426614174004' as UUID,
    prompt: 'Write a story set in a futuristic world.',
    promptType: PromptTypes.SCIFI,
    visible: true
};