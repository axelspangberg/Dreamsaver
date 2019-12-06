using System;
using System.Linq;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Commands;
using Dreamsaver.Core.Requests.Dreams.Interfaces;
using Dreamsaver.Core.Requests.Dreams.Queries;
using MediatR;

namespace Dreamsaver.Infrastructure.fakes.DreamsEntity
{
    public class FakeDreamsSaver : IDreamsSaver
    {
        public Task<int> SaveDreamsTemplate(SaveDreamsFieldsCommand command)
        {
            int id = FakeDreamsReader.State.Max(e => e.DreamsId) + 1;
            FakeDreamsReader.State.Add(new GetAllDreamsForUserQuery.Response
            {
                DreamsId = id,
                Title = command.Title,
                Description = command.Description,
                Amount = command.Amount,
                User = "Axel Spångberg",
                CreatedDate = DateTime.Now
            });

            return Task.FromResult((id));
        }
    }
}