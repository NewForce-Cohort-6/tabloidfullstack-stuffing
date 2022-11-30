using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using System.Security.Claims;
using Tabloid.Repositories;
using Tabloid.Models;
using System;
using System.Collections.Generic;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepository.GetAll());
        }
        // GET 
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_categoryRepository.GetCategoryById(id));
        }

        // ADD
        [HttpPost]
        public IActionResult Add(Category category)
        {
            _categoryRepository.AddCategory(category);
            return CreatedAtAction("Get", new { id = category.Id }, category);
        }

        //PUT
        [HttpPut("{id}")]
        public IActionResult Edit(int id, Category category)
        {
            if(id  != category.Id)
            {
                return BadRequest();
            }
            _categoryRepository.UpdateCategory(category);
                return NoContent();
            
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryRepository.DeleteCategory(id);
            return NoContent();
        }

      
    }
}
        //// GET: CategoryController/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    Category category = _categoryRepository.GetCategoryById(id);
        //    if (category == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(category);
        //}