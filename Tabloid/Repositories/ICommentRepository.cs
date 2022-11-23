using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICommentRepository
    {
        public void AddComment(Comment newComment);
        public void DeleteComment(int commentId);
        public void EditComment(Comment comment);
        Comment GetCommentById(int id);
    }
}