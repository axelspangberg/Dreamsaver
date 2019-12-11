using System;
using System.Net;
using System.Threading.Tasks;
using Dreamsaver.Core.Exceptions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Dreamsaver.Core.Middlewares
{
    public static class ExceptionMiddlewareExtensions
    {
        public static void UseCustomExceptionMiddleware(this IApplicationBuilder app)
        {
            app.UseMiddleware<ExceptionMiddleware>();
        }
    }

    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
        {
            _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (ValidationException e)
            {
                string errorMessage = $"Valideringsfel: {string.Join(" | ", e.ErrorMessages)}";
                _logger.LogError(e, $"[Validation error] Global error handler ({errorMessage})");

                await HandleExceptionAsync(httpContext, errorMessage, HttpStatusCode.BadRequest);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Global error handler");
                await HandleExceptionAsync(httpContext, "Okänt fel. Behöver undersökas i loggen.", HttpStatusCode.InternalServerError);
            }
        }


        private static Task HandleExceptionAsync(HttpContext context, string errorMessage, HttpStatusCode httpStatusCode)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)httpStatusCode;

            var errorDetails = new ErrorDetails()
            {
                StatusCode = (int)httpStatusCode,
                ConsoleMessage = errorMessage,
            };

            return context.Response.WriteAsync(JsonConvert.SerializeObject(errorDetails));
        }
    }

    public class ErrorDetails
    {
        public int StatusCode { get; set; }
        public string ConsoleMessage { get; set; }
    }

}