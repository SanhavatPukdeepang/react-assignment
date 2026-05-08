import { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from "./UserTable";


const HomePage = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [sharedUsers, setSharedUsers] = useState([]);
    const [formValues, setFormValues] = useState({ name: "", lastname: "", position: "" });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (activeSection === "user" || activeSection === "admin") {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await axios.get('https://67eca027aa794fb3222e43e2.mockapi.io/members');
                    setSharedUsers(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Fetch error:", error);
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [activeSection]);

    const handleSectionToggle = (section) => {
        setActiveSection((current) => (current === section ? null : section));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveUser = async (e) => {
        e.preventDefault();
        const trimmedName = formValues.name.trim();
        const trimmedLastname = formValues.lastname.trim();
        const trimmedPosition = formValues.position.trim();

        if (!trimmedName || !trimmedLastname || !trimmedPosition) {
            return;
        }

        try {
            const response = await axios.post('https://67eca027aa794fb3222e43e2.mockapi.io/members', {
                name: trimmedName,
                lastname: trimmedLastname,
                position: trimmedPosition,
            });

            setSharedUsers((prev) => [
                ...prev,
                response.data,
            ]);

            setFormValues({ name: "", lastname: "", position: "" });
        } catch (error) {
            console.error("Save error:", error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`);
            setSharedUsers((prev) => prev.filter((user) => user.id !== id));
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    return (
        <>
            <div className="w-full bg-gray-300 text-black p-10 min-h-screen">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Generation Thailand</h1>
                    <h1 className="text-3xl font-bold">React-Assignment</h1>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => handleSectionToggle("user")}
                        className="bg-white px-4 py-2 rounded font-bold hover:text-blue-400 transition-colors"
                    >
                        User Home Section
                    </button>
                    <button
                        onClick={() => handleSectionToggle("admin")}
                        className="bg-white px-4 py-2 rounded font-bold hover:text-blue-400 transition-colors"
                    >
                        Admin Home Section
                    </button>
                </div>

                {activeSection === "user" && <UserTable members={sharedUsers} loading={loading} />}

                {activeSection === "admin" && (
                    <div className="mt-10">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold">Generation Thailand</h1>
                            <p className="text-xl font-semibold">Home - Admin Section</p>
                        </div>

                        <div className="max-w-5xl mx-auto space-y-8">
                            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                                <h2 className="text-lg font-bold mb-4">Create User Here</h2>
                                <form onSubmit={handleSaveUser} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formValues.lastname}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                    <input
                                        type="text"
                                        name="position"
                                        value={formValues.position}
                                        onChange={handleInputChange}
                                        placeholder="Position"
                                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>

                            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                                {loading ? (
                                    <div className="text-center py-10">Loading...</div>
                                ) : (
                                    <table className="w-full text-center border-collapse bg-white">
                                        <thead className="bg-gray-100 border-b border-gray-300">
                                            <tr>
                                                <th className="px-6 py-4 text-sm font-bold text-gray-800 border-r border-gray-300">Name</th>
                                                <th className="px-6 py-4 text-sm font-bold text-gray-800 border-r border-gray-300">Last Name</th>
                                                <th className="px-6 py-4 text-sm font-bold text-gray-800 border-r border-gray-300">Position</th>
                                                <th className="px-6 py-4 text-sm font-bold text-gray-800">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {sharedUsers.length > 0 ? (
                                                sharedUsers.map((user) => (
                                                    <tr key={user.id} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-200">{user.name}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-200">{user.lastname}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-200">{user.position}</td>
                                                        <td className="px-6 py-4 text-sm text-red-600 font-bold">
                                                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                [1, 2, 3].map((i) => (
                                                    <tr key={i}>
                                                        <td className="px-6 py-6 border-r border-gray-200">&nbsp;</td>
                                                        <td className="px-6 py-6 border-r border-gray-200">&nbsp;</td>
                                                        <td className="px-6 py-6 border-r border-gray-200">&nbsp;</td>
                                                        <td className="px-6 py-6">&nbsp;</td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default HomePage;