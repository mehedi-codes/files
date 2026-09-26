type BaseItem = {
  id: string;
  name: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type FileItem = BaseItem & {
  type: 'file';
  content: string | null;
};

export type FolderItem = BaseItem & {
  type: 'folder';
  items?: FileTreeItem[] | null;
};

export type FileTreeItem = FileItem | FolderItem;
