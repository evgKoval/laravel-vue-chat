<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChannelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'image' => $this->image,
            'last_message' => $this->lastMessage ? [
                'author' => $this->lastMessage->author->name,
                'text' => $this->lastMessage->text,
                'time' => $this->lastMessage->getFormattedCreatedTime(),
            ] : null,
            'count_unread_messages' => 0,
        ];
    }
}
