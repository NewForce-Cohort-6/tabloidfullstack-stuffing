using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostTagController : ControllerBase
    {
        private readonly IPostTagRepository _postTagRepo;

        public PostTagController(IPostTagRepository postTagRepo)
        {
            _postTagRepo = postTagRepo;
        }

        // GET: api/<PostTagController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<PostTagController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<PostTagController>
        [HttpPost]
        public IActionResult Post(PostTag postTag)
        {
            _postTagRepo.AddPostTag(postTag);
            return CreatedAtAction("Get", new { id = postTag.Id }, postTag);
        }

        // PUT api/<PostTagController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<PostTagController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
