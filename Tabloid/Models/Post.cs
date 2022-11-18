using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }
        public string ImageLocation { get; set; }
        public DateTime CreateDateTime { get; set; }

        [DataType(DataType.Date)]
        public DateTime? PublishDateTime { get; set; }
        public bool IsApproved { get; set; }

        [Required]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
<<<<<<< HEAD
        public List<Comment> Comments { get; set; }
        
=======
>>>>>>> main
    }
}
