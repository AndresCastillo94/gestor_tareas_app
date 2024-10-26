<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\TaskStatus;
use App\Models\TaskPriority;
use App\Models\User;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $task_status = TaskStatus::all()->random()->id;
        $task_priority = TaskPriority::all()->random()->id;
        $user = User::all()->random()->id;

        return [
            'title' => fake()->sentence(),
            'description' => fake()->text(),
            'end_date' => fake()->dateTimeBetween('now','+2 months'),
            'user_id' => $user,
            'task_status_id' => $task_status,
            'task_priority_id' => $task_priority
        ];
    }
}
