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
    ],
  });
}
