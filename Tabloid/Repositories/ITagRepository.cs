using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        void AddTag(Tag tag);
        List<Tag> GetAll();
    }
}