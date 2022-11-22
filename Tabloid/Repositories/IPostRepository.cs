using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllPublishedPosts();
        Post GetPublishedPostById(int id);
        List<Post> GetPostsByUser(int id);
        Post GetUserPostById(int userProfileId, int id);
        Post GetByIdWithComments(int id);
        void Add(Post post);
        void UpdatePost(Post post);

    }
}