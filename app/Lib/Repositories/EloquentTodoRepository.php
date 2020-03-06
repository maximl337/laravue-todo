<?php

namespace App\Lib\Repositories;

use App\Todo;
use App\Lib\Contracts\TodoRepositoryInterface;

class EloquentTodoRepository implements TodoRepositoryInterface
{
    public function find(int $id): Todo
    {
        return Todo::findOrFail($id);
    }

    public function create(array $data): Todo
    {
        return Todo::create($data);
    }

    public function update(int $id, array $data): Todo
    {
        $todo = Todo::findOrFail($id);
        $todo->update($data);
        return $todo;
    }

    public function delete(int $id): bool
    {
        return Todo::find($id)->delete();
    }
}
