using Microsoft.Extensions.Configuration;
using System;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public class PostTagRepository : BaseRepository, IPostTagRepository
    {
        public PostTagRepository(IConfiguration config) : base(config) { }

        //Allow users to associate a tag with a post by posting to PostTag bridge table
        public void AddPostTag(PostTag postTag)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    INSERT INTO PostTag(PostId, TagId)
                                    OUTPUT INSERTED.ID
                                    VALUES (@postId, @tagId)";
                    cmd.Parameters.AddWithValue("@postId", postTag.PostId);
                    cmd.Parameters.AddWithValue("@tagId", postTag.TagId);

                    postTag.Id = (int)cmd.ExecuteScalar();
                }

            }
        }

        //We should add a get all by post so we can compare directly in the post tag manager view

    }
}
