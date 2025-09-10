// File: src/components/Sidebar/SidebarItem.jsx
export const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer">
      <Icon size={20} />
      <span className="text-sm truncate overflow-hidden whitespace-ellipsis">
        {item.label}
      </span>
    </div>
  );
};
