<?php
  $response = array ('success' => false);
  $formData = file_get_contents( 'php://input' );
  $data = json_decode($formData);
  echo $data->name;
  echo $data->email;
  echo $data->message;
  if($data->submit) {
    $name = $data->name;
    $email = $data->email;
    $message = $data->message;
    if ($name!=''&& $email!='' &&$message!=''){
      $mailTo = 'gabanimillin@gmail.com';
      $subject = 'New contact form submission';
      $body  = 'From: ' . $name . "\n";
      $body .= 'Email: ' . $email . "\n";
      $body .= "Message:\n" . $message . "\n\n";
      $from = $name;
      
      $success = mail( $mailTo, $subject, $body, $from );
      if ( $success ) {
         $response[ 'success' ] = true;
      }
    }
  }
echo json_encode( $response );
?>