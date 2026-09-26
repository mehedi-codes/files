import type { ReactNode } from 'react';

import { cn } from 'cn';
import { FileTextIcon, FolderIcon } from 'lucide-react';

import type { FileTreeItem } from '@/types/file-tree-item';

import { items } from '@/assets/data';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export const FileTree = () => {
  return (
    <nav className="flex flex-col gap-1 py-2">
      {items.map((item) => (
        <RenderItem key={item.id} fileItem={item} />
      ))}
    </nav>
  );
};

const TreeRow = ({
  className,
  children,
  ...props
}: { className?: string; children: ReactNode } & React.ComponentProps<'button'>) => {
  return (
    <button
      type="button"
      className={cn('flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-2 py-2 hover:bg-black/5', className)}
      {...props}
    >
      {children}
    </button>
  );
};

const RowContent = ({ fileItem }: { fileItem: FileTreeItem }) => {
  return (
    <>
      {fileItem.type === 'folder' ? <FolderIcon className="size-3" /> : <FileTextIcon className="size-3" />}
      <span className="text-sm">{fileItem.name}</span>
    </>
  );
};

export const RenderItem = ({ fileItem }: { fileItem: FileTreeItem }) => {
  if (fileItem.type === 'folder') {
    return (
      <Collapsible key={fileItem.id}>
        <CollapsibleTrigger
          render={
            <TreeRow>
              <RowContent fileItem={fileItem} />
            </TreeRow>
          }
        />
        <CollapsibleContent className="mt-1 flex flex-col gap-1 ml-5">
          {fileItem.items?.map((child) => (
            <RenderItem key={child.id} fileItem={child} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return (
    <TreeRow key={fileItem.id}>
      <RowContent fileItem={fileItem} />
    </TreeRow>
  );
};
