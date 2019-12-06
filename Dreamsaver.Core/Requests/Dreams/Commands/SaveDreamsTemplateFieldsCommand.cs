using System;
using System.Threading;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Interfaces;
using MediatR;

namespace Dreamsaver.Core.Requests.Dreams.Commands
{
    public class SaveDreamsFieldsCommand : IRequest<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }

        public class Handler : IRequestHandler<SaveDreamsFieldsCommand, int>
        {
            private readonly IDreamsSaver _saver;

            public Handler(IDreamsSaver saver)
            {
                _saver = saver;
            }

            public async Task<int> Handle(SaveDreamsFieldsCommand request, CancellationToken cancellationToken)
            {
                return await _saver.SaveDreamsTemplate(request);
            }
        }
    }
}