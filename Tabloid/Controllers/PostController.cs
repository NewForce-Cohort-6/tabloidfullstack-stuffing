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

        // GET: api/<PostController>/5/User/6
        [HttpGet("{id}/User/{userProfileId}")]
        public IActionResult GetByUser(int userProfileId, int id)
        {
            return Ok(_postRepository.GetUserPostById(userProfileId, id));
        }

        // POST: api/<PostController>
        [HttpPost]
        public IActionResult Create(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        //// DELETE api/<PostController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
