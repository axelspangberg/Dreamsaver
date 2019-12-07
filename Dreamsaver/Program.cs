using System;
using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace Dreamsaver.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {

            CreateSerilogConfiguration();

            try
            {
                Log.Debug("Starting Dreamsaver");
                CreateWebHostBuilder(args).Build().Run();
                Log.Debug("Stopping Dreamsaver");
            }
            catch (Exception e)
            {
                Log.Fatal(e, "Dreamsaver terminated unexpectedly");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }
        
        
        public static IHostBuilder CreateWebHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(builder =>
            {
                builder.UseStartup<Startup>();
                builder.UseSerilog();
            });
        
        private static void CreateSerilogConfiguration()
        {
            string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", false, true)
                .AddJsonFile($"appsettings.{environment}.json", true, true)
                .Build();

            Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(configuration)
                .Enrich.FromLogContext()
                .CreateLogger();
        }
    }
}
