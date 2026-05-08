import { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://67eca027aa794fb3222e43e2.mockapi.io/members');
        setMembers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };



    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="mt-5 w-full max-w-4xl mx-auto">

      {/* ตัวตารางพร้อมขอบโค้งมน */}
      <div className="overflow-hidden rounded-xl border border-gray-300 shadow-sm">
        <table className="w-full text-center border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="px-6 py-4 text-sm font-bold text-gray-800 border-r border-gray-300 last:border-r-0">Name</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-800 border-r border-gray-300 last:border-r-0">Last Name</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-800">Position</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {members.length > 0 ? (
              members.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-300 last:border-r-0">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-300 last:border-r-0">{item.lastname}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{item.position}</td>
                </tr>
              ))
            ) : (
              // กรณีไม่มีข้อมูล ให้โชว์แถวว่างเหมือนในรูปตัวอย่าง
              [1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className="px-6 py-6 border-r border-gray-300">&nbsp;</td>
                  <td className="px-6 py-6 border-r border-gray-300">&nbsp;</td>
                  <td className="px-6 py-6">&nbsp;</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;