using System.Collections.Generic;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Queries;

namespace Dreamsaver.Core.Requests.Dreams.Interfaces
{
    public interface IDreamsReader
    {
        Task<IList<GetAllDreamsForUserQuery.Response>> GetDreams();
    }
}