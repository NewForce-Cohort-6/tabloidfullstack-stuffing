using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public class UserTypeRepository : BaseRepository, IUserTypeRepository
    {
        public UserTypeRepository(IConfiguration configuration) : base(configuration) { }

        //Get a list of all tags
        public List<UserType> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT Id, Name FROM UserType";
                    var reader = cmd.ExecuteReader();

                    List<UserType> userTypes = new List<UserType>();

                    while (reader.Read())
                    {
                        userTypes.Add(new UserType()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))
                        });
                    }
                    reader.Close();
                    return userTypes;
                }
            }
        }
    

    }
}
