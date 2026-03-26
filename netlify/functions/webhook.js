exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const pesanMasuk = data.message || "Halo";

    // kirim balik ke WA via Fonnte
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        "Authorization": "QNvea9j4ggvfQQDLXVdi",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        target: data.sender, // nomor pengirim
        message: "Laporan diterima: " + pesanMasuk
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "ok" })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "error"
    };
  }
};