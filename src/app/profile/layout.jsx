import Sidebar from "@/components/profile/sidebar/Sidebar";

export default function ProfileLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 laptop:grid-cols-[1fr,4fr] gap-[15px] mt-15px min-h-[50vh]">
      <aside>
        <Sidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
}
