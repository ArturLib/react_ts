import React, {FC} from 'react';

import {IPost} from "../../interfaces/postInterface";
import css from './Post.module.css';

interface IProps {
    post: IPost,
    click: (id: number) => Promise<void>
}

const Post:FC<IProps> = ({post, click}) => {

    const {id, title} = post;

    return (
        <div className={css.postStyle}>
            {id} - {title}
            <button className={css.buttonStyle} onClick={() => click(id)}>details</button>
        </div>
    );
};

export {Post};