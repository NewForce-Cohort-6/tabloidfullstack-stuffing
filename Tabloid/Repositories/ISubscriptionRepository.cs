using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ISubscriptionRepository
    {
        void Add(Subscription subscription);
        System.Collections.Generic.List<Subscription> GetUserSubscriptions(int id);
    }
}