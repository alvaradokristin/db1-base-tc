using bd_dotnet_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace bd_dotnet_backend.Data
{
    class ZooDb : DbContext
    {
        public ZooDb(DbContextOptions<ZooDb> options)
            : base(options) { }

        public DbSet<Todo> Todos => Set<Todo>();
    }
}
