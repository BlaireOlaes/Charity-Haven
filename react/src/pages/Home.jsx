import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

function Home() {
    const [posts, setPosts] = useState([]);
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
                                <button>POST CHARITY</button>
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
