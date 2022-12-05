using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostTagRepository
    {
        void AddPostTag(PostTag postTag);
        List<PostTag> GetAllPostTagsByPostId(int id);
        public void DeletePostTag(int postTagId);

    }
}