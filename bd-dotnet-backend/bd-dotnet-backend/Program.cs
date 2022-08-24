using Microsoft.EntityFrameworkCore;
using bd_dotnet_backend.Models;
using bd_dotnet_backend.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ZooDb>(opt => opt.UseInMemoryDatabase("TodoList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

app.UseCors("corspolicy");

app.MapGet("/", () => "The API is active");

app.MapGet("/zooitems", async (ZooDb db) =>
    await db.Todos.ToListAsync());

app.MapGet("/zooitems/{id}", async (int id, ZooDb db) =>
    await db.Todos.FindAsync(id)
        is Todo todo
            ? Results.Ok(todo)
            : Results.NotFound());

app.MapPost("/zooitems", async (Todo todo, ZooDb db) =>
{
    db.Todos.Add(todo);
    await db.SaveChangesAsync();

    return Results.Created($"/zooitems/{todo.Id}", todo);
});

app.MapPut("/zooitems/{id}", async (int id, Todo inputTodo, ZooDb db) =>
{
    var todo = await db.Todos.FindAsync(id);

    if (todo is null) return Results.NotFound();

    todo.Pais = inputTodo.Pais;
    todo.Nombre = inputTodo.Nombre;
    todo.Telefono = inputTodo.Telefono;
    todo.Sitio = inputTodo.Sitio;

    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/zooitems/{id}", async (int id, ZooDb db) =>
{
    if (await db.Todos.FindAsync(id) is Todo todo)
    {
        db.Todos.Remove(todo);
        await db.SaveChangesAsync();
        return Results.Ok(todo);
    }

    return Results.NotFound();
});

app.Run();