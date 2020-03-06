<?php

namespace Tests\Feature;

use App\Todo;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TodosTest extends TestCase
{

    use DatabaseTransactions;

    public function testShouldGetAllTodos()
    {
        $todos = factory(Todo::class, 5)->create();
        $response = $this->get('/api/todos')
            ->assertStatus(200)
            ->assertJsonCount(5, 'todos');
    }

    public function testShouldCreateTodo()
    {
        $title = 'foobar';
        $response = $this->post('/api/todos', [
                'title' => $title
            ])->assertStatus(201);

        $this->assertDatabaseHas('todos', [
            'title' => $title,
            'completed' => false
        ]);
    }

    public function testShouldReturn422OnMissingTitle()
    {
        $response = $this->post('/api/todos', [])
            ->assertStatus(302);

        $this->assertDatabaseMissing('todos', [
            'title' => '',
            'completed' => false
        ]);
    }

    public function testShouldUpdateExistingTodo()
    {
        $todo = factory(Todo::class)->create();

        $response = $this->put('/api/todos/'.$todo->id, [
                'completed' => true
            ])
            ->assertStatus(200);

        $this->assertDatabaseHas('todos', [
            'id' => $todo->id,
            'title' => $todo->title,
            'completed' => true
        ]);
    }

    public function testShouldDeleteTodo()
    {
        $todo = factory(Todo::class)->create();

        $response = $this->delete('/api/todos/'.$todo->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('todos', [
            'id' => $todo->id,
            'title' => $todo->title
        ]);
    }
}
