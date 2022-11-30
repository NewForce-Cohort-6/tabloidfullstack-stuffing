using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
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
        public List<PostTag> GetAllPostTags()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT Id, PostId, TagId FROM PostTag";
                    var reader = cmd.ExecuteReader();

                    List<PostTag> postTags = new List<PostTag>();

                    while (reader.Read())
                    {
                        postTags.Add(new PostTag()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            PostId = reader.GetInt32(reader.GetOrdinal("PostId")),
                            TagId = reader.GetInt32(reader.GetOrdinal("TagId")),

                        });
                    }
                    reader.Close();
                    return postTags;
                }
            }
        }

    }
}
