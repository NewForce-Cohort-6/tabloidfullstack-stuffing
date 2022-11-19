using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;


namespace Tabloid.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration config) : base(config) { }
        
        
    }
}
