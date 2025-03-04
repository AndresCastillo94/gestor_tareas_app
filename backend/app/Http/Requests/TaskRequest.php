<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'             => 'required|max:200',
            'description'       => 'required|max:255',
            'end_date'          => 'required|after:created_at',
            'user_id'           => 'required',
            'task_status_id'    => 'required',
            'task_priority_id'  => 'required'
        ];
    }
}
