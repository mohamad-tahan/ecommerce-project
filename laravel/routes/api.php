<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\UserController;

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});



Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'user'], function(){
        Route::group(['middleware' => 'role.user'], function(){
        Route::post('/add_favorites', [UserController::class, 'addFavorites']);
        });
    });

    Route::group(['prefix' => 'admin'], function(){
        Route::group(['middleware' => 'role.admin'], function(){
            Route::post('/add_items', [AdminController::class, 'addItem']);
            Route::get('/items/{id?}', [AdminController::class, 'getAllItems']);
            Route::post('/add_category', [AdminController::class, 'addCategory']);
            Route::get('/categories/{id?}', [AdminController::class, 'getAllCategories']);  
            Route::get('/itemsbycategory/{id}', [AdminController::class, 'getItemsbyCategoryId']);
        });
    });


    Route::get('/notFound', [UserController::class, 'notFound'])->name("notFound");
}
);