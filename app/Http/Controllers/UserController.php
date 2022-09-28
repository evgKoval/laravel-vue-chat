<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Auth;

class UserController extends Controller
{
    /**
     * Get the specified user data.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUser()
    {
        return new UserResource(Auth::user());
    }
}
