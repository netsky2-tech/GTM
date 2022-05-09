<?php
namespace App\Notifications;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword;
class MailResetPasswordNotification extends ResetPassword
{
    use Queueable;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($token)
    {
        parent::__construct($token);
    }
    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }
    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return MailMessage
     */
    public function toMail($notifiable)
    {
        $link = url( "/reset-password/".$this->token );
        return ( new MailMessage )
            ->subject( 'Notificación de solicitud de reinicio de contraseña de acceso' )
            ->greeting('Hola!')
            ->line( "Estás recibiendo este correo porque recibimos una solicitud de reinicio de la contraseña de acceso de tu cuenta." )
            ->action( 'Reiniciar Contraseña', $link )
            ->line( "Este enlace expirará en ".config('auth.passwords.users.expire')." minutos" )
            ->line( "Si tu no solicitastes este reinicio de contraseña, no es necesario que realices alguna acción." )
            ->salutation("Saludos de parte del Equipo de Capital Software");
    }
    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
