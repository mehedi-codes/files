import type { FileTreeItem } from '@/types/file-tree-item';

export const items: FileTreeItem[] = [
  {
    id: '1',
    name: 'documents',
    type: 'folder',
    parentId: null,
    createdAt: '2026-01-15T08:30:00Z',
    updatedAt: '2026-01-15T08:30:00Z',
    items: [
      {
        id: '4',
        name: 'notes.txt',
        type: 'file',
        parentId: '1',
        content: '1. Buy groceries\n2. Call client at 3 PM\n3. Review PRs',
        createdAt: '2026-01-17T14:15:00Z',
        updatedAt: '2026-01-18T16:45:00Z',
      },
      {
        id: '5',
        name: 'personal',
        type: 'folder',
        parentId: '1',
        createdAt: '2026-01-18T10:00:00Z',
        updatedAt: '2026-01-18T10:00:00Z',
        items: [
          {
            id: '6',
            name: 'journal.txt',
            type: 'file',
            parentId: '5',
            content: 'Today was a productive day building file trees in TypeScript.',
            createdAt: '2026-01-19T20:00:00Z',
            updatedAt: '2026-01-19T20:30:00Z',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'projects',
    type: 'folder',
    parentId: null,
    createdAt: '2026-01-16T09:00:00Z',
    updatedAt: '2026-01-16T09:00:00Z',
    items: [
      {
        id: '7',
        name: 'todo.txt',
        type: 'file',
        parentId: '2',
        content: '- Implement recursive folder rendering\n- Add drag and drop support',
        createdAt: '2026-01-20T11:00:00Z',
        updatedAt: '2026-01-21T09:10:00Z',
      },
      {
        id: '8',
        name: 'changelog.txt',
        type: 'file',
        parentId: '2',
        content: 'v1.0.0 - Initial release\nv1.0.1 - Fixed key propagation bug',
        createdAt: '2026-01-21T12:00:00Z',
        updatedAt: '2026-01-22T08:00:00Z',
      },
    ],
  },
  {
    id: '3',
    name: 'README.txt',
    type: 'file',
    parentId: null,
    content: 'Welcome to your workspace! Organise your text files here.',
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-01-12T11:20:00Z',
  },
];
