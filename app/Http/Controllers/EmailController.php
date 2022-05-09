<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
	
    public function sendTestEmail(Request $request)
	{
        $to_name = 'Raul Gomez';
        $to_email = 'rgomez@capitalsoftware.com.ni';
        $data = array('name'=>"Ogbonna Vitalis(sender_name)", "body" => "A test mail");
Mail::send('emails.cotizacion', $data, function($message) use ($to_name, $to_email) {
    $message->to($to_email, $to_name)
        ->subject('Laravel Test Mail');
$message->from('rgomez91@gmail.com','Test Mail');
});
    }
}