import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Crud.css";






const Crud = () => {
    const [data, setData] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("Insert");
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios.get("http://localhost:3001/api/user");
            setData(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to fetch user data.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const openModal = (mode, id = null) => {
        setModalMode(mode);
        setIsModalOpen(true);
        if (id !== null) {
            const selectedRow = data.find((item) => item.id === id);
            setFormData(selectedRow); // Ensure this is properly setting the form data
            setCurrentId(id);
        } else {
            setFormData({ name: "", email: "", password: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Form data submitted:", formData);
            if (modalMode === "Insert") {
                const response = await axios.post("http://localhost:3001/api/user", formData);
                console.log("User inserted:", response.data);
            } else if (modalMode === "Update") {
                console.log("Updating user with ID:", currentId);
                const response = await axios.put(`http://localhost:3001/api/user/${currentId}`, formData);
                console.log("User updated:", response.data);
            }
            fetchData();
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error during submit:", error);
            alert("Failed to update/insert the user.");
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log(`Attempting to delete user with ID: ${id}`);
            const response = await axios.delete(`http://localhost:3001/api/user/${id}`);
            console.log("User deleted:", response.data);
            fetchData();
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete the user.");
        }
    };

    return (
        <div className="crud-body">
            <div className="crud-container">
                <button onClick={() => openModal("Insert")}>Insert</button>

                {isModalOpen && (
                    <div className="crud-modal">
                        <div className="crud-modal-content">
                            <h3>
                                {modalMode === "Insert"
                                    ? "Insert User"
                                    : modalMode === "Update"
                                    ? "Update User"
                                    : "Read User"}
                            </h3>
                            <form onSubmit={modalMode !== "Read" ? handleSubmit : (e) => e.preventDefault()}>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    disabled={modalMode === "Read"}
                                />
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={modalMode === "Read"}
                                />
                                <label>Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    disabled={modalMode === "Read"}
                                />
                                {modalMode !== "Read" && <button type="submit">Submit</button>}
                                <button type="button" onClick={() => setIsModalOpen(false)}>
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button onClick={() => openModal("Read", item.id)}>Read</button>
                                    <button onClick={() => openModal("Update", item.id)}>Update</button>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Crud;