<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", \App\Http\Controllers\WelcomeController::class)->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
