using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Commands;
using MediatR;

namespace Dreamsaver.Core.Requests.Dreams.Interfaces
{
    public interface IDreamsSaver
    {
        Task<int> SaveDreamsTemplate(SaveDreamsFieldsCommand command);
    }
}