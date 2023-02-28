import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET"],
  origin: "*",
  optionsSuccessStatus: 200,
  credentials: true,
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.cookies, "in server");
  await runMiddleware(req, res, cors);
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      `refreshToken=456; HttpOnly; Secure; Path=/; Max-Age=${60 * 60 * 24 * 30}`
    );
    res.status(200).json({ accessToken: "123", refreshToken: "456" });
  }
}
