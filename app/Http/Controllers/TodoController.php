<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use App\Lib\Contracts\AllTodosQueryInterface;
use App\Lib\Contracts\TodoRepositoryInterface;

class TodoController extends Controller
{
    public function index(AllTodosQueryInterface $query)
    {
        $todos = $query->all();
        return response()->json(compact('todos'));
    }

    public function store(Request $request, TodoRepositoryInterface $repository)
    {
        $request->validate([
            'title' => 'required'
        ]);

        $input = $request->input();

        $todo = $repository->create([
            'title' => $input['title']
        ]);

        return response()->json(compact('todo'), 201);
    }

    public function update(Todo $todo, Request $request, TodoRepositoryInterface $repository)
    {
        $request->validate([
            'title' => 'sometimes|required',
            'completed' => 'sometimes|boolean'
        ]);

        $input = $request->input();

        $nextTodo = $repository->update($todo->id, $input);

        return response()->json(['todo' => $nextTodo]);
    }

    public function destroy(Todo $todo, TodoRepositoryInterface $repository)
    {
        $status = $repository->delete($todo->id);

        return response()->json(['deleted' => $status]);
    }
}
