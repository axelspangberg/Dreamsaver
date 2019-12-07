using System;
using System.Collections.Generic;
using System.Linq;

namespace Dreamsaver.Core.Exceptions
{
    public class ValidationException : Exception
    {
        public IEnumerable<string> ErrorMessages { get; }
        public bool HasErrors => ErrorMessages.Any();
   
        public ValidationException(IEnumerable<string> errorMessages)
        {
            ErrorMessages = errorMessages ?? new List<string>();
        }
    }
}