<?php

namespace App\Lib\Repositories;

use App\Todo;
use Illuminate\Database\Eloquent\Collection;
use App\Lib\Contracts\AllTodosQueryInterface;

class EloquentAllTodosQuery implements AllTodosQueryInterface
{
    public function all(): Collection
    {
        return Todo::all();
    }
}
