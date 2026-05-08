import OwnerImg from '../assets/OwnerImg.jpg'

const Owner = () => {
  return (
    <div className="w-full bg-gray-200 min-h-screen p-10 flex flex-col items-center">

      {/* ส่วนหัวชื่อ (Name/Title) */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        29 Sanhavat(Book) - JSD12
      </h1>

      {/* ส่วนของรูปภาพ (Picture Placeholder) */}
      <div className="w-80 h-64 border-2 border-gray-800 bg-gray-300 flex items-center justify-center relative mb-10 overflow-hidden">
        {/* เส้นกากบาทจำลองแบบในรูป */}
        <img src={OwnerImg}
          alt="Owner Profile"
          className="w-80 h-64 object-cover border-2 border-gray-800 shadow-md" />
      </div>

      {/* ส่วนประวัติ (Biography) */}
      <div className="max-w-3xl text-center">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Short Biography:</h3>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div>
  );
};

export default Owner;