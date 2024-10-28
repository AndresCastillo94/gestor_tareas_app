<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    protected $token;

    public function __construct($resource, $token)
    {
        parent::__construct($resource);
        $this->token = $token;
    }

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => $this->user,
            'attributes' => [
                'name' => $this->name,
                'email' => $this->email
            ],
            'token' => $this->token
        ];
    }
}
