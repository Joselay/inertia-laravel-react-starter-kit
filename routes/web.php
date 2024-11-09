<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia(
        'Home',
        [
            'name' => 'John Doe',
            'age' => 30,
        ]
    );
});