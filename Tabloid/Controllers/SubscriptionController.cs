using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly ISubscriptionRepository _subscriptionRepository;
        public SubscriptionController(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }

        // GET api/<SubscriptionController>/5
        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] int id)
        {
            return Ok(_subscriptionRepository.GetUserSubscriptions(id));
        }

        // GET api/<SubscriptionController>/5/Post/6
        [HttpGet("{id}/Post/{postId}")]
        public IActionResult GetUserSubByPost([FromRoute] int id, [FromRoute] int postId)
        {
            return Ok(_subscriptionRepository.GetUserSubscriptionForPost(id, postId));
        }

        // POST api/<SubscriptionController>
        [HttpPost]
        public IActionResult Post([FromBody] Subscription subscription)
        {
            _subscriptionRepository.Add(subscription);
            return CreatedAtAction("Get", new { id = subscription.Id }, subscription);
        }

        // PUT api/<SubscriptionController>/5
        [HttpPut("{id}")]
        public IActionResult Put([FromRoute] int id, [FromBody] Subscription subscription)
        {
            if (id != subscription.Id)
            {
                return BadRequest();
            }
            _subscriptionRepository.Update(subscription);
            return NoContent();
        }
    }

}
