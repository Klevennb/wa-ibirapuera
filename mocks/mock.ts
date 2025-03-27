import { UUID } from "crypto"
import { SerializedEditorState } from "lexical"

type MockEntry = {
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

export type MockUser = {
    id: UUID
    username: string
    bio: string
    tagline: string
    bestStreak: number
    favoriteGenre: PromptTypes
    mostProlificGenre: PromptTypes
    wordPerMinute: number
    wordGoal: number
    email: string
    defaultVisibleStories: boolean
    pinnedStory: UUID
    showNSFW: boolean
    privateProfile: boolean
}

type MockUserRelationships = {
    userId: UUID
    friends: SimpleUser[]
    blocked: SimpleUser[]
}

type SimpleUser = {
    username: string
    UUID: string
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
    startTime: 1739759109,
    endTime: 1739759909,
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

export const mockUser: MockUser = {
    id: '123e4567-e89b-12d3-a456-426614174005' as UUID,
    username: 'sampleUser',
    bio: 'This is a sample bio.',
    tagline: 'Sample tagline',
    bestStreak: 10,
    favoriteGenre: PromptTypes.FANTASY,
    mostProlificGenre: PromptTypes.MYSTERY,
    wordPerMinute: 50,
    wordGoal: 1000,
    email: 'sampleuser@example.com',
    defaultVisibleStories: true,
    pinnedStory: '123e4567-e89b-12d3-a456-426614174006' as UUID,
    showNSFW: false,
    privateProfile: false
};

const mockUserRelationships: MockUserRelationships = {
    userId: '123e4567-e89b-12d3-a456-426614174005' as UUID,
    friends: [
        { username: 'friend1', UUID: '123e4567-e89b-12d3-a456-426614174007' },
        { username: 'friend2', UUID: '123e4567-e89b-12d3-a456-426614174008' }
    ],
    blocked: [
        { username: 'blockedUser1', UUID: '123e4567-e89b-12d3-a456-426614174009' }
    ]
};