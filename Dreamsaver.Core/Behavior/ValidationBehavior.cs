using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Dreamsaver.Core.Exceptions;
using Dreamsaver.Core.Requests;
using MediatR;

namespace Dreamsaver.Core.Behavior
{
    public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    {
        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken,
            RequestHandlerDelegate<TResponse> next)
        {
            if (request is IValidatableRequest<TResponse> validatableRequest)
            {
                var validationResult = validatableRequest.Validate();
                var failures = validationResult
                    .Errors
                    .Where(failure => failure != null)
                    .Select(failure => $"{failure.PropertyName} - {failure.ErrorMessage}");

                var errorMessages = failures.ToList();
                if (errorMessages.Any())
                {
                    throw new ValidationException(errorMessages);
                }
            }

            return await next();
        }
    }
}