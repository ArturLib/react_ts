import React, {FC} from 'react';

import {IPost} from "../../interfaces/postInterface";

interface IProps {
    postDetails: IPost
}

const PostDetails:FC<IProps> = ({postDetails}) => {

    const {title, body} = postDetails;

    return (
        <div>
            <h3>title - {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {PostDetails};