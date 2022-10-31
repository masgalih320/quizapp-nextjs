// Define API routes for getting question bank
export default function handler(req, res) {
  return res.status(200).json({
    status: 200,
    msg: "success",
    data: [
      {
        time: 10000,
        question: "Siapakah presiden Negara Republik Indonesia ke-1?",
        answer: "Ir. Soekarno",
        choices: ["WR. Soepratman", "Soeharto", "Puan Maharani", "Ir. Soekarno"],
      },
      {
        time: 5000,
        question: "Kerusuhan Banjarmasin terjadi pada tahun berapa?",
        answer: 1997,
        choices: [1997, 2002, 2013, 1945],
      },
      {
        time: 20000,
        question: "Kepanjangan DPR adalah?",
        answer: "Dewan Perwakilan Rakyat",
        choices: ["Dewan Perwakilan Daerah", "Dewan Perwakilan Rakyat", "Dewan Pribumi Rahasia", "Dewan Pengkhianat Rakyat"],
      },
      {
        time: 10000,
        question: "Kepanjangan TNI adalah?",
        answer: "Tentara Nasional Indonesia",
        choices: ["Tentara Nasional Indonesia", "Tau Nama Indonesia", "Takutnya Negara Indonesia", "Tinggal Nama Ini"],
      },
    ],
  });
}
