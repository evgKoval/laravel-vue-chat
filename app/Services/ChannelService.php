<?php

namespace App\Services;

use App\Repositories\ChannelRepository;

class ChannelService
{
    /**
     * Repository for ChannelService.
     *
     * @var ChannelRepository
     */
    public $channelRepository;

    /**
     * Construct ChannelService.
     *
     * @param ChannelRepository $channelRepository
     * @return void
     */
    public function __construct(ChannelRepository $channelRepository)
    {
        $this->channelRepository = $channelRepository;
    }

    /**
     * Get all channels.
     *
     * @return mixed
     */
    public function getAllChannels()
    {
        return $this->channelRepository->all();
    }
}
