using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Interfaces;
using Dreamsaver.Core.Requests.Dreams.Queries;

namespace Dreamsaver.Infrastructure.fakes.DreamsEntity
{
    public class FakeDreamsReader : IDreamsReader
    {
        private static readonly IList<GetAllDreamsForUserQuery.Response> Dreams =
            new List<GetAllDreamsForUserQuery.Response>
            {
                new GetAllDreamsForUserQuery.Response
                {
                   Title = "Title",
                   Description = "This is a fake description",
                   Amount = 420,
                   User = "Axel Spångberg",
                   CreatedDate = DateTime.Now
                }
               
            };
        
        public async Task<IList<GetAllDreamsForUserQuery.Response>> GetDreams()
        {
            return await Task.FromResult(Dreams);
        }
    }
}