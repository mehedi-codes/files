import { FileTree } from '@/components/file-tree';

export const Sidebar = () => {
  return (
    <aside className="w-72 overflow-hidden border border-r-0 border-gray-300 bg-gray-200 p-2 select-none">
      <div className="flex items-center gap-x-2 border-b border-b-gray-300 pb-2">
        <img src="/favicon.svg" alt="logo" width={20} height={20} />
        <h2 className="text-sm font-bold">files</h2>
      </div>
      <FileTree />
    </aside>
  );
};
