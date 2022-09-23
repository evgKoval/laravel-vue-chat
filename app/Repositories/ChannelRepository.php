<?php

namespace App\Repositories;

use App\Models\Channel;
use App\Repositories\Repository;

class ChannelRepository extends Repository
{
    /**
     * Construct ChannelRepository.
     *
     * @param Channel $model
     */
    public function __construct(Channel $model)
    {
        parent::__construct($model);
    }
}
