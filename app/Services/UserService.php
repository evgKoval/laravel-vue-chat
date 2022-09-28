<?php

namespace App\Services;

use App\Repositories\UserRepository;

class UserService
{
    /**
     * Repository for UserService.
     *
     * @var UserRepository
     */
    public $userRepository;

    /**
     * Construct UserService.
     *
     * @param UserRepository $userRepository
     * @return void
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
}
