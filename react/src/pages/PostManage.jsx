import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import {
    Dropdown,
    DropdownButton,
    Modal,
    Button,
    Form,
    Navbar,
    Nav,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

function PostManagement() {
    const [post, setPost] = useState([]);
    const [deletingPost, setDeletePost] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [permanentDeleteId, setPermanentDeleteId] = useState(null);
    const [showRestoreModal, setShowRestoreModal] = useState(false);
    const [restoringPostId, setRestoringPostId] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredPost = post.filter((post) =>
        [post.postname, post.username].some(
            (value) =>
                value !== null &&
                value
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
        )
    );

    const fetchPost = async () => {
        try {
            const response = await axios.get("/api/posts", {
                withCredentials: false,
            });
            console.log(response.data);
            setPost(response.data);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/postdelete/${deletingPost.id}`, {
                withCredentials: false,
            });
            setDeletePost(null);
            toast.success("Post Deleted successfully.");
            fetchPost();
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    const handleRestore = async () => {
        try {
            await axios.put(
                `/api/postrestore/${restoringPostId}`,
                {},
                {
                    withCredentials: false,
                }
            );
            setShowRestoreModal(false);
            setRestoringPostId(null);
            toast.success("Post restored successfully.");
            fetchPost();
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    const handlePermanentDelete = async () => {
        try {
            await axios.delete(`/api/postforcedelete/${permanentDeleteId}`, {
                withCredentials: false,
            });
            setShowDeleteModal(false);
            setPermanentDeleteId(null);
            toast.success("Post permanently deleted successfully.");
            fetchPost();
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    function NavigationBar() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Post Manage</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Settings</Nav.Link>
                        <Nav.Link href="#link1">Notification</Nav.Link>
                        <Nav.Link href="#link2">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    function SidePanel() {
        return (
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link eventKey="link-1">Management</Nav.Link>
                <Nav.Link eventKey="link-2">Post Management</Nav.Link>
            </Nav>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <SidePanel />
                </div>
                <div className="col-md-9">
                    <NavigationBar  />
                    <ToastContainer />
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>PostName</th>
                                <th>Username</th>
                                <th>Description</th>
                                <th>Reacts</th>
                                <th>Comments</th>
                                <th>Contacts</th>
                                <th>Share</th>
                                <th>Post Image</th>
                                <th>Qrcode</th>
                                <th>Gcash Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPost.map((post) => (
                                <tr
                                    key={post.id}
                                    style={{
                                        backgroundColor: post.deleted_at
                                            ? "gray"
                                            : "white",
                                    }}
                                >
                                    <td>{post.postname}</td>
                                    <td>{post.username}</td>
                                    <td>{post.description}</td>
                                    <td>{post.reacts}</td>
                                    <td>{post.comments}</td>
                                    <td>{post.contacts}</td>
                                    <td>{post.share}</td>
                                    <td>
                                        <img
                                            src={post.image}
                                            alt="Post"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <img
                                            src={post.qrcode}
                                            alt="QR Code"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                            }}
                                        />
                                    </td>
                                    <td>{post.gcash}</td>

                                    <td>
                                        <DropdownButton
                                            id="dropdown-basic-button"
                                            title="Actions"
                                            style={{
                                                fontSize: "1.2rem",
                                                padding: "10px",
                                            }}
                                        >
                                            {post.deleted_at ? (
                                                <>
                                                    <Dropdown.Item
                                                        onClick={() => {
                                                            setRestoringPostId(
                                                                post.id
                                                            );
                                                            setShowRestoreModal(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        Restore Post
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        onClick={() => {
                                                            setPermanentDeleteId(
                                                                post.id
                                                            );
                                                            setShowDeleteModal(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        Permanent Delete
                                                    </Dropdown.Item>
                                                </>
                                            ) : (
                                                <Dropdown.Item
                                                    onClick={() =>
                                                        setDeletePost(post)
                                                    }
                                                >
                                                    Disable Post
                                                </Dropdown.Item>
                                            )}
                                        </DropdownButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {deletingPost && (
                            <Modal
                                show={deletingPost !== null}
                                onHide={() => setDeletePost(null)}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Confirm Disable Post
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure you want to disable this post?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setDeletePost(null)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={handleDelete}
                                    >
                                        Disable
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        )}
                    </table>
                </div>
            </div>
            <Modal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to permanently delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowDeleteModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handlePermanentDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showRestoreModal}
                onHide={() => setShowRestoreModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Restore Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to restore this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowRestoreModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleRestore}>
                        Restore
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PostManagement;
