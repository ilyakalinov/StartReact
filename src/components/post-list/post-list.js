import React from "react";
import PostListItem from '../post-list-item/post-list-item'
import {ListGroup} from 'reactstrap'

import './post-list.css'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked, onToggle}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;            //одно значение отдельно, отсальное отдельно
        return (
            <li key ={item.id} className="list-group-item"> 
                <PostListItem 
                    {...itemProps}
                    onDelete = {() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id, 'important')}
                    onToggleLiked={() => onToggleLiked(id, 'like')}
                    />
            </li>
        )
    });
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;