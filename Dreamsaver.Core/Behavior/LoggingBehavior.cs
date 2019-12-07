using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Dreamsaver.Core.Behavior
{
    public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    {
        private readonly ILogger<LoggingBehavior<TRequest, TResponse>> _logger;

        public LoggingBehavior(ILogger<LoggingBehavior<TRequest, TResponse>> logger)
        {
            _logger = logger;
        }

        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken,
            RequestHandlerDelegate<TResponse> next)
        {
            Stopwatch watch = Stopwatch.StartNew();

            try
            {
                _logger.LogTrace("-> Handling request: {@request}", request);
                var response = await next();
                LogExecutionFinished("Handled", watch);

                return response;
            }
            catch
            {
                LogExecutionFinished("Error handling", watch);

                throw;
            }
        }

        private void LogExecutionFinished(string errorOrHandled, Stopwatch watch)
        {
            watch.Stop();
            _logger.LogTrace(
                $"<- {errorOrHandled} {typeof(TRequest).Name}, execution time: {watch.ElapsedMilliseconds}ms");
        }
    }
}