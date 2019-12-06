using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Interfaces;
using Dreamsaver.Core.Requests.Dreams.Queries;

namespace Dreamsaver.Infrastructure.fakes.DreamsEntity
{
    public class FakeDreamsReader : IDreamsReader
    {

        internal static IList<GetAllDreamsForUserQuery.Response> State;

        static FakeDreamsReader()
        {
            State = new List<GetAllDreamsForUserQuery.Response>
            {
                new GetAllDreamsForUserQuery.Response
                {
                    DreamsId = 1,
                    Title = "Ny Cykel",
                    Description = "Vill spara till att köpa ny cykel",
                    Amount = 10000,
                    User = "Axel Spångberg",
                    CreatedDate = DateTime.Now.AddDays(-1)
                },
                new GetAllDreamsForUserQuery.Response
                {
                    DreamsId = 2,
                    Title = "Ny Datorskärm",
                    Description = "Vill spara till att köpa ny Datorskärm",
                    Amount = 5299,
                    User = "Axel Spångberg",
                    CreatedDate = DateTime.Now.AddYears(-1)
                },
                new GetAllDreamsForUserQuery.Response
                {
                    DreamsId = 3,
                    Title = "Svensk Klassiker",
                    Description = "Vill spara till att köpa alla grejerna till en svensk klassiker",
                    Amount = 5520,
                    User = "Axel Spångberg",
                    CreatedDate = DateTime.Now.AddMinutes(-25)
                },
                new GetAllDreamsForUserQuery.Response
                {
                    DreamsId = 4,
                    Title = "Utomlandsresa",
                    Description = "Vill spara till att köpa en utomlandsresa",
                    Amount = 8001,
                    User = "Axel Spångberg",
                    CreatedDate = DateTime.Now.AddYears(-1)
                },
                new GetAllDreamsForUserQuery.Response
                {
                    DreamsId = 5,
                    Title = "Köpa bostadsrätt",
                    Description = "Vill spara till att köpa en bostadsrätt",
                    Amount = 4700000,
                    User = "Axel Spångberg",
                    CreatedDate = DateTime.Now.AddYears(-4)
                }

            };
        }

        public async Task<IList<GetAllDreamsForUserQuery.Response>> GetDreams()
        {
            return await Task.FromResult(State);
        }
    }
}