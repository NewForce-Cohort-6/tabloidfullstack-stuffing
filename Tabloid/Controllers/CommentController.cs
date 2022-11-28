using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;

        public CommentController(ICommentRepository commentRepo)
        {
            _commentRepo = commentRepo;
        }

        // GET: api/<TagController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_commentRepo.GetAllComments());
        }
        
        // GET api/<CommentController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var comment = _commentRepo.GetCommentById(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }

        // POST api/<CommentController>
        [HttpPost]
        public IActionResult Post(Comment newComment)
        {
            _commentRepo.AddComment(newComment);
            return CreatedAtAction("Get", new { id = newComment.Id }, newComment);
        }

        // PUT api/<CommentController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }
            _commentRepo.EditComment(comment);
            return NoContent();
        }

        // DELETE api/<CommentController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentRepo.DeleteComment(id);
            return NoContent();
        }
    }
}
