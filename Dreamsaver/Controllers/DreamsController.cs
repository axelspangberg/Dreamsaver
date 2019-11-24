using System.Collections.Generic;
using System.Threading.Tasks;
using Dreamsaver.Core.Requests.Dreams.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Dreamsaver.Web.Controllers
{
    [ApiController]
    [Route("api/dreams")]
    public class DreamsController : Controller
    {
        private readonly IMediator _mediator;

        public DreamsController(IMediator mediator)
        {
            _mediator = mediator;
        }
        
        [HttpGet("")]
        public async Task<ActionResult<IList<GetAllDreamsForUserQuery.Response>>> GetAllDreamsForUser()
        {
            return Ok(await _mediator.Send(new GetAllDreamsForUserQuery()));
        }
        
// Example of post
//        [HttpPost("update")]
//        public async Task<AlarmObjectFull> UpdateAlarmObject(UpdateAlarmObjectCommand command)
//        {
//            return await _mediator.Send(command);
//        }
        
    }
}