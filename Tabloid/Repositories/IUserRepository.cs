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
        void UpdateIsActive(int id, JsonPatchDocument userProfile);
        void UpdateIsActiveV2(int id, UserProfile userProfile);
        void UpdateUserType(int id, UserProfile userProfile);
        List<UserProfile> GetAll();
    }
}