import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "PoBiRi",
        comment: "연습용입니다.",
    },
    {
        name : "Jundang",
        comment: "저는 로리콘입니다.",
    },
    {
        name : "Asom",
        comment: "연습용입니다3.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;