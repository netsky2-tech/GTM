<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Libraries\Helpers;
use App\Libraries\ImageResize;
use Auth;
use Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class MediaController extends Controller
{
	/**
     * Upload Files
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function upload(Request $request)
    {
    	$file = $request->file('file');
			$newFileName = Helpers::reformatFileName($file->getClientOriginalName());
			//echo $file->getClientOriginalName();
		  //echo env('APP_SUB_URL');
    	$image = new ImageResize($file);
    	//$image->crop(180, 180);
    	$image->save('product-images/' . $newFileName);

		$arr = [
			'file_name' => $newFileName,
			'file_size' => filesize('product-images/' . $newFileName),
			'file_type' => $file->getMimeType(),
			/*asset('product-images/' . $newFileName)*/
			'file_thumbnail' => in_array($file->getMimeType(), ['image/png', 'image/jpg', 'image/jpeg']) ? '/public/product-images/'. $newFileName : ''
		];

		return response()->json($arr)->header('Content-Type', 'text/html');
    }

    /**
     * List of Uploaded Files
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function getFiles(Request $request)
	{

	    //if(Auth::user()){
		$uploadDirectory = "product-images/";
		$files = scandir($uploadDirectory, 1);
		$page = $_GET['page'];
		$filesPerPage = $_GET['files_per_page'];
		$search = $_GET['search_file'];
		$formattedFiles = [];

		foreach ($files as $key => $file) {
			$finfo = finfo_open(FILEINFO_MIME_TYPE);
			$mime = finfo_file($finfo, $uploadDirectory . $file);
			finfo_close($finfo);

			if ($mime != 'directory') {
				if (!empty($search)) {
					if (strpos($file, $search) !== false) {
						$formattedFiles[] = [
							'file_name' => $file,
							'file_size' => filesize($uploadDirectory . $file),
							'file_type' => $mime,
							'file_thumbnail' =>  in_array(explode('/', $mime)[1], ['png', 'jpg', 'jpeg']) ?  '/public/'.$uploadDirectory . $file : ''
						];
					}
				} else {
					$formattedFiles[] = [
						'file_name' => $file,
						'file_size' => filesize($uploadDirectory . $file),
						'file_type' => $mime,
						'file_thumbnail' =>  in_array(explode('/', $mime)[1], ['png', 'jpg', 'jpeg']) ?  '/public/'.$uploadDirectory . $file : ''
					];
				}
			}
		}

		$arrPaginated = array_slice($formattedFiles, (($page * $filesPerPage) - $filesPerPage), $filesPerPage);
		return response()->json([
		    'result'=> JWTAuth::user(),
			'files' => $arrPaginated,
			'total' => count($formattedFiles)
		])->header('Content-Type', 'text/html');
	/*}else{
            return response()->json([
                'result' => 'no tienes permiso',
            ])->header('Content-Type', 'text/html');
        }*/
    }

    public function getIconFiles(Request $request)
    {

        //if(Auth::user()){
        $uploadDirectory = "app/images/iconos-sistema/";
        $files = scandir($uploadDirectory, 1);
        $page = $_GET['page'];
        $filesPerPage = $_GET['files_per_page'];
        $search = $_GET['search_file'];
        $formattedFiles = [];

        foreach ($files as $key => $file) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mime = finfo_file($finfo, $uploadDirectory . $file);
            finfo_close($finfo);

            if ($mime != 'directory') {
                if (!empty($search)) {
                    if (strpos($file, $search) !== false) {
                        $formattedFiles[] = [
                            'file_name' => $file,
                            'file_size' => filesize($uploadDirectory . $file),
                            'file_type' => $mime,
                            'file_thumbnail' =>  in_array(explode('/', $mime)[1], ['png', 'jpg', 'jpeg']) ?  '/public/'.$uploadDirectory . $file : ''
                        ];
                    }
                } else {
                    $formattedFiles[] = [
                        'file_name' => $file,
                        'file_size' => filesize($uploadDirectory . $file),
                        'file_type' => $mime,
                        'file_thumbnail' =>  in_array(explode('/', $mime)[1], ['png', 'jpg', 'jpeg']) ?  '/public/'.$uploadDirectory . $file : ''
                    ];
                }
            }
        }

        $arrPaginated = array_slice($formattedFiles, (($page * $filesPerPage) - $filesPerPage), $filesPerPage);
        return response()->json([
            'result'=> JWTAuth::user(),
            'files' => $arrPaginated,
            'total' => count($formattedFiles)
        ])->header('Content-Type', 'text/html');
        /*}else{
                return response()->json([
                    'result' => 'no tienes permiso',
                ])->header('Content-Type', 'text/html');
            }*/
    }

    public function subirConciliacion(Request $request){

        $image = '';

        if(isset($_FILES['file']['name']))
        {
            $image_name = $_FILES['file']['name'];
            $valid_extensions = array("jpg","jpeg","png");
            $extension = pathinfo($image_name, PATHINFO_EXTENSION);
            if(in_array($extension, $valid_extensions))
            {
                $upload_path = 'upload/' . time() . '.' . $extension;
                if(move_uploaded_file($_FILES['file']['tmp_name'], $upload_path))
                {
                    $message = 'Image Uploaded';
                    $image = $upload_path;
                }
                else
                {
                    $message = 'There is an error while uploading image';
                }
            }
            else
            {
                $message = 'Only .jpg, .jpeg and .png Image allowed to upload';
            }
        }
        else
        {
            $message = 'Select Image';
        }

        $output = array(
            'message'  => $message,
            'image'   => $image
        );

        echo json_encode($output);

    }

}