<?php 

namespace App\Libraries;
use Mpdf\Mpdf;
use Mpdf\Output\Destination;

class Helpers {

	public static function formatSizeUnits($bytes)
    {
        if ($bytes >= 1073741824) {
            $bytes = number_format($bytes / 1073741824, 2) . ' GB';
        } elseif ($bytes >= 1048576) { 
            $bytes = number_format($bytes / 1048576, 2) . ' MB';
        } elseif ($bytes >= 1024) {
            $bytes = number_format($bytes / 1024, 2) . ' KB';
        } elseif ($bytes > 1) {
            $bytes = $bytes . ' bytes';
        } elseif ($bytes == 1) {
            $bytes = $bytes . ' byte';
        } else {
            $bytes = '0 bytes';
        }

        return $bytes;
    }

	public static function reformatFileName($fileName)
	{
		$arrFileName 	= explode('.', $fileName);
		$countArr 		= count($arrFileName);
		$newFileName 	= '';

		for ($z = 0; $z <= $countArr - 2; $z++) {
			$newFileName .= $arrFileName[$z] . '.';
		}

		$newFileName 	= str_replace(' ', '', $newFileName);
		$newFileName 	= strtolower($newFileName);
		$fileName 		=  $newFileName . date("d-m-Y_H-i-s") . '.' . $arrFileName[$countArr - 1];

		return $fileName;		
    }
    
    
    /**
     * PDF output helper
     *
     * @param string $file
     * @param array $model
     */
    public static function pdf($file, $model)
    {

        $pdf = pdfRaw($file, $model);


        $file = $model->number.'-'.time().'.pdf';

        if(request()->has('mode') && request()->mode == 'download') {
            return $pdf->Output($file, Destination::DOWNLOAD);
        }

        return $pdf->Output($file, Destination::INLINE);
    }


  
    public function pdfRaw($file, $model) {
        /*$options = settings()->getMany(['header-html', 'footer-html']);
        $options = array_filter($options, function($key){
            return !is_null($key);
        } );*/
        $options = [
            'foo' => 'bar'
        ];
      
        // dd($options['header-html']);
        $html = view($file, ['model' => $model, 'options' =>  $options]);
        $pdf = new Mpdf(config('pdf'));
        $pdf->WriteHTML($html);
    
        return $pdf;
    }

function moneyFormat($value, $currency, $code = true)
{
    $amount = number_format($value, $currency->decimal_place);

    return $code? $currency->code.' '.$amount : $amount;
}
	
}
