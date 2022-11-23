using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;
using Microsoft.AspNetCore.Connections;
using Microsoft.Data.SqlClient;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration){}

        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT id, name FROM Category ORDER BY Name";
                    var reader = cmd.ExecuteReader();
                    var categories = new List<Category>();
                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                        });
                    }
                    reader.Close();
                    return categories;
                }
            }
        }
        // Adding method to create a new category and add to database
        public void AddCategory(Category category)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO Category ([Name])
                                        OUTPUT INSERTED.ID
                                        VALUES (@name)";
                    cmd.Parameters.AddWithValue("@name", category.Name);

                    category.Id = (int)cmd.ExecuteScalar();

                    //category.Id = id;
                }
            }
        }
    }
}
