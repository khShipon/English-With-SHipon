import React from 'react';
import { Comment } from '../../types';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="mt-8 space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="border-b pb-4">
          <p className="font-medium">{comment.name}</p>
          <p className="text-sm text-gray-500">{comment.email}</p>
          <p className="mt-2 text-gray-700">{comment.message}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;