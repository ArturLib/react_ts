import React, {useEffect, useState} from 'react';

import {IPost} from "../../interfaces/postInterface";
import {postService} from "../../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import css from "./Posts.module.css";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [postDetails, setPostDetails] = useState<IPost>(null);

    const click = async (postId:number):Promise<void> => {
        const {data} = await postService.getById(postId);
        setPostDetails(data)
    }

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            <div className={css.postsStyle}>
                {posts.map(post => <Post key={post.id} post={post} click={click}/>)}
            </div>
            <div>
                {postDetails && <PostDetails postDetails={postDetails}/>}
            </div>
        </div>
    );
};

export {Posts};