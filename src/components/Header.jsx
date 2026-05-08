export default function Navbar() {
  return (
    // เปลี่ยน border-black เป็น border-gray-700 เพื่อให้ดูซอฟต์ลงเข้ากับสีเทาเข้ม
    <nav className="bg-gray-300 border-b border-gray-800 px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-end items-center">

        

        {/* ส่วนของ Links */}
        <div className="flex gap-6">
          <a href="/" className="text-black hover:text-blue-400 font-medium transition-colors">
            Home
          </a>
          <a href="/owner" className="text-black hover:text-blue-400 font-medium transition-colors">
            Owner
          </a>
        </div>

      </div>
    </nav>
  );
}