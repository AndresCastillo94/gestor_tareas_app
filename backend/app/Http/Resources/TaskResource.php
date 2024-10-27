<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => 'task',
            'attributes' => [
                'title' => $this->title,
                'description' => $this->description,
                'end_date' => $this->end_date
            ],
            'relationships' => [
                'user' => $this->user?->name,
                'task_status' => $this->task_status?->name,
                'task_priority' => $this->task_priority?->name
            ]
        ];
    }
}
