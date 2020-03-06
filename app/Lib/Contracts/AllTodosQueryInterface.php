<?php

namespace App\Lib\Contracts;

use Illuminate\Database\Eloquent\Collection;

interface AllTodosQueryInterface
{
    public function all(): Collection;
}
