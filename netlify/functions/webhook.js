exports.handler = async (event) => {
  try {
    // cuma terima POST
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed"
      };
    }

    const data = JSON.parse(event.body);

    console.log("📩 DATA MASUK:", data);

    const pesan = data.message || "";
    const nomor = data.sender; // nomor pengirim

    // respon otomatis
    let balasan = "Pesan diterima 👍";

    if (pesan.toLowerCase().includes("lapor")) {
      balasan = "Laporan kamu sudah diterima dan sedang diproses 🚀";
    } else if (pesan.toLowerCase().includes("halo")) {
      balasan = "Halo juga! 👋";
    }

    // kirim balasan ke WA via Fonnte
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        "Authorization": process.env.FONNTE_TOKEN,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        target: nomor,
        message: balasan
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success" })
    };

  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: "error"
    };
  }
};