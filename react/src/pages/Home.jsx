import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaCog, FaBell, FaAddressBook,FaHeart, FaUserFriends, FaShareAlt, FaQrcode, FaMoneyBillAlt} from 'react-icons/fa';

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
        <div className="modal-container">
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

            {/* <title>Charity Haven</title> */}
        <div className="home-wrapper">
            <div className="newsfeed">
                <header>
                    <div className="main-container1">
                            <nav>
                            <h3 className="my-logo">CHARITY HAVEN</h3>
                                <ul>
                                    <li className="uno">
                                        <Link to="/contacts">
                                            <FaAddressBook /> Contacts
                                        </Link>
                                    </li>
                                    <li className="two">
                                        <Link to="/notifications">
                                            <FaBell /> Notifications
                                        </Link>
                                    </li>
                                    <li className="three">
                                        <Link to="/settings">
                                            <FaCog /> Settings
                                        </Link>
                                    </li>
                                    <li className="four">
                                        <Link to="/profile">
                                            <FaUser /> Profile
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                    </div>                
           
                </header>
            </div>
            <section className="newsfeed-content">  
            <div className="description-post-content">
                    <h5>Click Post Charity to post new file:</h5>
                    <Button
                        variant="primary"
                        onClick={handleShow}
                        className="post-charity-button"
                    >
                        POST CHARITY
                    </Button>
                    <hr />
                </div>   
                <div className="posts-container">
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <div className="user">
                            <h4 className="name">{post.postname}</h4>
                            <p className="username">{post.username}</p>
                            <p>
                                <span>{new Date(post.upload_time).toLocaleString()}</span>
                            </p>
                            </div>
                            <div className="post-wrapper">
                            <div className="userpost-container">
                            <h5>{post.description}</h5>
                            <img src={post.image} alt={post.postname} />
                            </div>
                            </div>

                            <hr className="one" />

                            <div className="heart-container">
                            <FaHeart className="heartsym" /><p className="heart">{post.reacts}</p>
                            </div>
                            <div className="comment-container">
                            <FaHeart className="commentsym" /><p className="comment">{post.reacts}</p>
                            </div>
                            <div className="contact-container">
                            <div>
                            <FaUserFriends className="contactsym" />
                            </div>
                            <p className="contact2">{post.contacts}</p> 
                            </div>
                            <div className="qr-container">
                            <FaQrcode className="qrsym" /><p className="qr">{post.share}</p>
                            <img src={post.qrcode} alt="QR Code" />  <p>{post.gcash}</p> 
                            </div>
                           
                            <div className="share-container">
                            <FaShareAlt className="sharesym" /><p className="share">{post.share}</p>
                            </div>
                            <div className="comment-wrapper">
                                <p className="comment-content">{post.comments}</p>
                            </div>
                            {/* <FaMoneyBillAlt /> 
                            <p>{post.gcash}</p>  */}
                            {/* 
                            <img src={post.qrcode} alt="QR Code" /> 
                            <FaMoneyBillAlt /> 
                            <p>{post.gcash}</p>   */}
                      </div>
            


                        
                    ))}
                </div>
            </section>
        </div>
        </div>

    );
}

export default Home;
