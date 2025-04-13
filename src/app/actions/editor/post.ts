import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export async function createPost(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { title, content, authorId } = req.body;

    if (!title || !content || !authorId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                authorId,
            },
        });

        return res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}