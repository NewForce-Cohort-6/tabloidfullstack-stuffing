using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;


namespace Tabloid.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration config) : base(config) { }

        //Allow users to create comments on posts.
        public void AddComment(Comment newComment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    INSERT INTO Comment(Subject, Content, UserId, PostId, CreateDateTime)
                                    OUTPUT INSERTED.ID
                                    VALUES (@subject, @content, @userProileId, @postId, @createDateTime)";
                    cmd.Parameters.AddWithValue("@subject", newComment.Subject);
                    cmd.Parameters.AddWithValue("@content", newComment.Content);
                    cmd.Parameters.AddWithValue("@userProfileId", newComment.UserProfileId);
                    cmd.Parameters.AddWithValue("@postId", newComment.PostId);
                    cmd.Parameters.AddWithValue("@createDateTime", DateTime.Now);
                    
                    newComment.Id = (int)cmd.ExecuteScalar();
                }

            }
        }
    }
}
