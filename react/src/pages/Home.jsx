import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

function Home() {
    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [previewSrc, setPreviewSrc] = useState(null);
    const [qrCodePreviewSrc, setQrCodePreviewSrc] = useState(null);

    const {
        getRootProps: getQrCodeRootProps,
        getInputProps: getQrCodeInputProps,
    } = useDropzone({
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setQrCodePreviewSrc(reader.result);
            };
            reader.readAsDataURL(file);
        },
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
        },
    });

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewSrc(reader.result);
            };
            reader.readAsDataURL(file);
        },
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
        },
    });
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("/api/posts", {
                    withCredentials: false,
                });
                setPosts(response.data);
            } catch (error) {
                console.error("There was an error!", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Title>Post Charity</Modal.Title>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="postTitle">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter post title"
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Gcash Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Gcash Number"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Post Cover Image</Form.Label>
                            <div className="mb-3" {...getRootProps()}>
                                <input {...getInputProps()} />
                                {previewSrc ? (
                                    <img src={previewSrc} alt="Preview" />
                                ) : (
                                    <p>
                                        Drag 'n' drop post cover image here, or
                                        click to select an image
                                    </p>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>QR Code Image</Form.Label>
                            <div className="mb-3" {...getQrCodeRootProps()}>
                                <input {...getQrCodeInputProps()} />
                                {qrCodePreviewSrc ? (
                                    <img
                                        src={qrCodePreviewSrc}
                                        alt="QR Code Preview"
                                    />
                                ) : (
                                    <p>
                                        Drag 'n' drop QR code image here, or
                                        click to select an image
                                    </p>
                                )}
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

            <title>Charity Haven</title>
            <header>
                <header className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Contacts</Link>
                            </li>
                            <li>
                                <Link to="/">Notifications</Link>
                            </li>
                            <li>
                                <Link to="/">Settings</Link>
                            </li>
                            <li>
                                <Link to="/">Profile</Link>
                            </li>

                            <li>
                                <Button variant="primary" onClick={handleShow}>
                                    POST CHARITY
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </header>
            <section>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.postname}</h2>
                        <h3>{post.description}</h3>
                        <p>{post.username}</p>
                        <p>{post.reacts}</p>
                        <p>{post.comments}</p>
                        <p>{post.contacts}</p>
                        <p>{post.share}</p>
                        <p>{new Date(post.upload_time).toLocaleString()}</p>
                        <img src={post.image} alt={post.postname} />
                        <img src={post.qrcode} alt="QR Code" />
                        <p>{post.gcash}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Home;
