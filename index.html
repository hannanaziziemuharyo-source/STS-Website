<?php
// Ambil data dari Fonnte (POST JSON)
$data = json_decode(file_get_contents("php://input"), true);

// Ambil pesan & nomor pengirim
$sender = $data['sender']; // nomor WA
$message = strtolower(trim($data['message'])); // isi pesan

// Token Fonnte lu
$token = "QNvea9j4ggvfQQDLXVdi";

// Cek isi pesan
if ($message == "halo") {

    $reply = "halo";

    // Kirim balasan ke Fonnte API
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.fonnte.com/send",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => array(
            'target' => $sender,
            'message' => $reply,
        ),
        CURLOPT_HTTPHEADER => array(
            "Authorization: $token"
        ),
    ));

    $response = curl_exec($curl);
    curl_close($curl);
}

// Optional: biar gak timeout
http_response_code(200);
echo "OK";
?>