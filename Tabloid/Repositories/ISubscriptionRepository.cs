using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ISubscriptionRepository
    {
        List<Subscription> GetUserSubscriptions(int id);
        Subscription GetUserSubscriptionForPost(int id, int postId);
        void Add(Subscription subscription);
        void Update(Subscription subscription);
    }
}
