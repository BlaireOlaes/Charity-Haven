import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { Dropdown, DropdownButton, Modal, Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

function AdminManage() {
    const [accounts, setAccounts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingAccount, setEditingAccount] = useState(null);
    const [deletingAccount, setDeletingAccount] = useState(null);

    const fetchAccounts = async () => {
        try {
            const response = await axios.get("/api/usersfetch", {
                withCredentials: false,
            });
            console.log(response.data);
            setAccounts(response.data);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    useEffect(() => {
        fetchAccounts();
    }, []);

    const [formInputs, setFormInputs] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        admin: false,
        charity: false,
        ban: false,
    });
    const handleSaveChanges = async () => {
        try {
            await axios.put(`/api/users/${editingAccount.id}`, formInputs, {
                withCredentials: false,
            });
            setShowModal(false);
            setEditingAccount(null);
            toast.success("Account updated successfully.");
            fetchAccounts();
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/usersdelete/${deletingAccount.id}`, {
                withCredentials: false,
            });
            setDeletingAccount(null);
            toast.success("Account deleted successfully.");
            fetchAccounts(); // Fetch the accounts again after deleting
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    const handleEdit = (account) => {
        setFormInputs(account);
        setEditingAccount(account);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setEditingAccount(null);
    };

    return (
        <div className="container">
            <ToastContainer />
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Charity</th>
                        <th>Banned</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <tr key={account.id}>
                            <td>{account.username}</td>
                            <td>
                                {account.firstname} {account.lastname}
                            </td>
                            <td>{account.email}</td>
                            <td>{account.admin ? "True" : "False"}</td>
                            <td>{account.charity ? "True" : "False"}</td>
                            <td>{account.ban ? "True" : "False"}</td>
                            <td>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title="Actions"
                                    style={{
                                        fontSize: "1.2rem",
                                        padding: "10px",
                                    }}
                                >
                                    <Dropdown.Item
                                        onClick={() => handleEdit(account)}
                                    >
                                        Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() =>
                                            setDeletingAccount(account)
                                        }
                                    >
                                        Delete
                                    </Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {editingAccount && (
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formInputs.username}
                                        onChange={(e) =>
                                            setFormInputs({
                                                ...formInputs,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Firstname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formInputs.firstname}
                                        onChange={(e) =>
                                            setFormInputs({
                                                ...formInputs,
                                                firstname: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formInputs.lastname}
                                        onChange={(e) =>
                                            setFormInputs({
                                                ...formInputs,
                                                lastname: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={formInputs.email}
                                        onChange={(e) =>
                                            setFormInputs({
                                                ...formInputs,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Admin"
                                        checked={formInputs.admin}
                                        onChange={(e) =>
                                            setFormInputs({
                                                ...formInputs,
                                                admin: e.target.checked,
                                            })
                                        }
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Charity"
                                        checked={formInputs.charity}
                                        onChange={(e) =>
                                            setFormInputs({
                                                ...formInputs,
                                                charity: e.target.checked,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Ban"
                                        checked={formInputs.ban}
                                        onChange={(e) =>
                                            setFormInputs({
                                                ...formInputs,
                                                ban: e.target.checked,
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
                {deletingAccount && (
                    <Modal
                        show={deletingAccount !== null}
                        onHide={() => setDeletingAccount(null)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete this account?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => setDeletingAccount(null)}
                            >
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </table>
        </div>
    );
}

export default AdminManage;
