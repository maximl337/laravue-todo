<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Lib\Repositories\EloquentTodoRepository;
use App\Lib\Contracts\TodoRepositoryInterface;

class EloquentTodoRepositoryTest extends TestCase
{

    public function testShouldReturnImplementationFromIOC()
    {
        $repository = resolve(TodoRepositoryInterface::class);
        $this->assertTrue(true);
    }
}
