using Microsoft.AspNetCore.JsonPatch;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
        UserProfile GetById(int id);
        void UpdateIsActive(int id, bool IsActive);
        List<UserProfile> GetAll();
    }
}