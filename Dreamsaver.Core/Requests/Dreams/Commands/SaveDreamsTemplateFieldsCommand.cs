using System.Threading;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Interfaces;
using FluentValidation;
using FluentValidation.Results;
using MediatR;

namespace Dreamsaver.Core.Requests.Dreams.Commands
{
    public class SaveDreamsFieldsCommand : IValidatableRequest<int>
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

        public class Validator : AbstractValidator<SaveDreamsFieldsCommand>
        {
            public Validator()
            {
//                RuleFor(command => command.Title).MaximumLength(5);
//                RuleFor(command => command.Description).MaximumLength(5);
            }
        }

        public ValidationResult Validate()
        {
            return new Validator().Validate(this);
        }
    }
}