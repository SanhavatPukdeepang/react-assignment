import UserTable from "./UserTable";


const HomePage = () => {
    return (
        <>
            <div className="w-full bg-gray-300 text-black p-10 min-h-screen">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Generation Thailand</h1>
                    <h1 className="text-3xl font-bold">React-Assignment</h1>
                </div>

                <div className="flex justify-center gap-4">
                    <button className="bg-white px-4 py-2 rounded font-bold  hover:text-blue-400  transition-colors">User Home Section</button>
                    <button className="bg-white px-4 py-2 rounded font-bold  hover:text-blue-400  transition-colors">Admin Home Section</button>
                </div> 
                <UserTable/>
            </div>
            
        </>
    )
}

export default HomePage;