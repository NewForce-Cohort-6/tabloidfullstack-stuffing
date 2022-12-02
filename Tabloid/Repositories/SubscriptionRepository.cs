using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class SubscriptionRepository : BaseRepository, ISubscriptionRepository
    {
        public SubscriptionRepository(IConfiguration config) : base(config) { }

        public void Add(Subscription subscription)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Subscription (
                            SubscriberUserProfileId, ProviderUserProfileId, BeginDateTime, EndDateTime)
                        OUTPUT INSERTED.ID
                        VALUES (
                            @subId, @provId, @begin, @end )";
                    cmd.Parameters.AddWithValue("@subId", subscription.SubscriberUserProfileId);
                    cmd.Parameters.AddWithValue("@provId", subscription.ProviderUserProfileId);
                    cmd.Parameters.AddWithValue("@begin", DateTime.Now);
                    cmd.Parameters.AddWithValue("@end", DBNull.Value);

                    subscription.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Subscription subscription)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Subscription
                            SET
                                SubscriberUserProfileId = @subId,
                                ProviderUserProfileId = @provId,
                                BeginDateTime = @begin,
                                EndDateTime = @end
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("id", subscription.Id);
                    cmd.Parameters.AddWithValue("@subId", subscription.SubscriberUserProfileId);
                    cmd.Parameters.AddWithValue("@provId", subscription.ProviderUserProfileId);
                    cmd.Parameters.AddWithValue("@begin", subscription.BeginDateTime);
                    cmd.Parameters.AddWithValue("@end", DateTime.Now);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Subscription> GetUserSubscriptions(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT s.Id, s.SubscriberUserProfileId, s.ProviderUserProfileId, 
                              s.BeginDateTime, s.EndDateTime,
                              u.FirstName, u.LastName, u.DisplayName, 
                              u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
                              u.UserTypeId,
                              u.Id,
                              ut.[Name] AS UserTypeName
                         FROM Subscription s
                              LEFT JOIN UserProfile u ON s.ProviderUserProfileId = u.Id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                         WHERE s.SubscriberUserProfileId = @id";

                    cmd.Parameters.AddWithValue("@id", id);
                    var reader = cmd.ExecuteReader();

                    var subscriptions = new List<Subscription>();

                    while (reader.Read())
                    {
                        subscriptions.Add(NewSubscriptionFromReader(reader));
                    }

                    reader.Close();

                    return subscriptions;
                }
            }
        }

        public Subscription GetUserSubscriptionForPost(int id, int postId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT s.Id, s.SubscriberUserProfileId, s.ProviderUserProfileId, 
                              s.BeginDateTime, s.EndDateTime,
                              u.FirstName, u.LastName, u.DisplayName, 
                              u.Email, u.CreateDateTime, u.ImageLocation AS AvatarImage,
                              u.UserTypeId,
                              u.Id,
                              p.Id,
                              ut.[Name] AS UserTypeName
                         FROM Subscription s
                              LEFT JOIN UserProfile u ON s.ProviderUserProfileId = u.Id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                              LEFT JOIN Post p ON s.ProviderUserProfileId = p.UserProfileId  
                         WHERE s.SubscriberUserProfileId = @id AND p.Id = @postId AND s.EndDateTime IS NULL";

                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.Parameters.AddWithValue("@postId", postId);
                    var reader = cmd.ExecuteReader();

                    Subscription subscription = null;

                    if (reader.Read())
                    {
                        subscription = NewSubscriptionFromReader(reader);
                    }

                    reader.Close();

                    return subscription;
                }
            }
        }

        private Subscription NewSubscriptionFromReader(SqlDataReader reader)
        {
            return new Subscription()
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                SubscriberUserProfileId = reader.GetInt32(reader.GetOrdinal("SubscriberUserProfileId")),
                ProviderUserProfileId = reader.GetInt32(reader.GetOrdinal("ProviderUserProfileId")),
                BeginDateTime = reader.GetDateTime(reader.GetOrdinal("BeginDateTime")),
                EndDateTime = DbUtils.GetNullableDateTime(reader, "EndDateTime"),
                UserProfile = new UserProfile()
                {
                    Id = reader.GetInt32(reader.GetOrdinal("ProviderUserProfileId")),
                    FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                    LastName = reader.GetString(reader.GetOrdinal("LastName")),
                    DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                    Email = reader.GetString(reader.GetOrdinal("Email")),
                    CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
                    ImageLocation = DbUtils.GetString(reader, "AvatarImage"),
                    UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                    UserType = new UserType()
                    {
                        Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                        Name = reader.GetString(reader.GetOrdinal("UserTypeName"))
                    }
                }
            };
        }

    }
}
