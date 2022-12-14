using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        // GET: api/<PostController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAllPublishedPosts());
        }

        // GET: api/<PostController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_postRepository.GetPublishedPostById(id));
        }

        // GET: api/<PostController>/User/5
        [HttpGet("User/{id}")]
        public IActionResult GetByUser(int id)
        {
            return Ok(_postRepository.GetPostsByUser(id));
        }

        // GET api/<PostController>/GetWithComments/5
        [HttpGet("GetWithComments/{id}")]
        public IActionResult GetWithComments(int id)
        {
            var post = _postRepository.GetByIdWithComments(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        // GET: api/<PostController>/5/User/6
        [HttpGet("{id}/User/{userProfileId}")]
        public IActionResult GetByUser(int userProfileId, int id)
        {
            return Ok(_postRepository.GetUserPostById(userProfileId, id));
        }

        // GET: api/<PostController>/Subscribed/6
        [HttpGet("Subscribed/{userProfileId}")]
        public IActionResult GetSubscribed(int userProfileId)
        {
            return Ok(_postRepository.GetUsersSubscribedPosts(userProfileId));
        }

        // POST: api/<PostController>
        [HttpPost]
        public IActionResult Create(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        // PUT api/<PostController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }
            _postRepository.Update(post);
            return NoContent();
        }
        [HttpGet("CanIDelete/{id}")]
        public IActionResult CanIDeleteACategory(int id)
        {
            return Ok(_postRepository.GetPostByCategoryId(id));
        }

        // DELETE api/<PostController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.Delete(id);
            return NoContent();
        }
    }
}
