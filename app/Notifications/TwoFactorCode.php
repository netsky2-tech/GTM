<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TwoFactorCode extends Notification
{
    use Queueable;

    public function via($notificable)
    {
        return ['mail'];
    }

    public function toMail($notificable)
    {
        $link = url( "/administracion/two-factor-verify");
        return (new MailMessage)

            ->subject( 'Código de verificación para acceso' )
            ->greeting('Hola!')
            ->line('Has recibido este correo porque has intentado iniciar sessión en el sistema. Tu código de verificacion es: '.$notificable->two_factor_code)
            ->action('Verificar aquí ',url($link))
            ->line('El código va a expirar en 10 minutos.')
            ->line('Si no has intentado iniciar sesión en el sistema, ignora este mensaje.')
            ->salutation("Saludos de parte del equpo de soporte.");
    }
}
