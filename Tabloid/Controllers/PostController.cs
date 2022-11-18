using Microsoft.AspNetCore.Mvc;
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

        //// POST api/<PostController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<PostController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<PostController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
