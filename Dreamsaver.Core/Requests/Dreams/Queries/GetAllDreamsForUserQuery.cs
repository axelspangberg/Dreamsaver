using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Interfaces;
using MediatR;

namespace Dreamsaver.Core.Requests.Dreams.Queries
{
    public class GetAllDreamsForUserQuery : IRequest<IList<GetAllDreamsForUserQuery.Response>>
    {
        public int DreamsId { get; set; }
        
        public class Handler : IRequestHandler<GetAllDreamsForUserQuery, IList<Response>>
        {
            private readonly IDreamsReader _reader;

            public Handler(IDreamsReader reader)
            {
                _reader = reader;
            }
            
            public async Task<IList<Response>> Handle(GetAllDreamsForUserQuery request, CancellationToken cancellationToken)
            {
                return await _reader.GetDreams();
            }
        }

        public class Response
        {
            public int DreamsId { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public int Amount { get; set; }
            public DateTime CreatedDate { get; set; }
            public string User { get; set; }

        }
    }
}