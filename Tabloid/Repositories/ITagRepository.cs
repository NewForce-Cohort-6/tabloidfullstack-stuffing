using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAll();
        void AddTag(Tag tag);

        //Do we need GetTagById?
        Tag GetTagById(int id);

        public void DeleteTag(int tagId);

    }
}