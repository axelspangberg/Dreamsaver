using System.ComponentModel.DataAnnotations;
using MediatR;
using ValidationResult = FluentValidation.Results.ValidationResult;

namespace Dreamsaver.Core.Requests
{
    public interface IValidatableRequest<out TResponse> : IRequest<TResponse>
    {
        ValidationResult Validate();
    }
}