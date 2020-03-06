<?php

namespace App\Lib\Contracts;

use App\Todo;

interface TodoRepositoryInterface
{
    public function find(int $id): Todo;
    public function create(array $data): Todo;
    public function update(int $id, array $data): Todo;
    public function delete(int $id): bool;
}
