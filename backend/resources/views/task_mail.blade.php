<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recordatorio de Tarea</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
    <table width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 5px; padding: 20px;">
        <tr>
            <td>
                <h1 style="color: #333333; font-size: 24px; text-align: center;">Recordatorio de Tarea: {{ $task->title }}</h1>
            </td>
        </tr>
        <tr>
            <td>
                <p style="font-size: 16px; color: #333333; line-height: 1.6;">
                    Hola <strong>{{ $task->user->name }}</strong>,
                </p>
                <p style="font-size: 16px; color: #333333; line-height: 1.6;">
                    Desde tu gestor de tareas te informamos que tienes una tarea pendiente:
                </p>
                <p style="font-size: 16px; color: #555555; line-height: 1.6; margin-left: 20px;">
                    <em>{{ $task->description }}</em>
                </p>
                <p style="font-size: 16px; color: #333333; line-height: 1.6;">
                    Esta tarea ha sido clasificada como de <strong>alta prioridad</strong>. Recuerda que la fecha de vencimiento es: 
                    <strong style="color: #e74c3c;">{{ $task->end_date }}</strong> y su estado actual es: 
                    <strong>{{ $task->task_status->name }}</strong>.
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding-top: 20px;">
                <p style="font-size: 16px; color: #333333; line-height: 1.6;">
                    Cordialmente,
                </p>
                <p style="font-size: 16px; color: #333333; line-height: 1.6;">
                    <strong>Administración de la aplicación Gestor de Tareas</strong>
                </p>
            </td>
        </tr>
    </table>
</body>
</html>

