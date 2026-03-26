exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    console.log("Data dari WA:", data);

    // contoh proses AI sederhana
    const pesan = data.message || "";
    const ringkasan = pesan.slice(0, 50);

    // nanti bisa lu kirim ke database di sini
    // await fetch("API_DB_LU", {...})

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        ringkasan: ringkasan
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "error"
    };
  }
};