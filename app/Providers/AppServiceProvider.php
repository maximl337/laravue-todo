<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Lib\Contracts\TodoRepositoryInterface;
use App\Lib\Repositories\EloquentTodoRepository;
use App\Lib\Contracts\AllTodosQueryInterface;
use App\Lib\Repositories\EloquentAllTodosQuery;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(TodoRepositoryInterface::class, EloquentTodoRepository::class);

        $this->app->singleton(AllTodosQueryInterface::class, EloquentAllTodosQuery::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
