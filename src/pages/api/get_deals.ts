import type { NextApiRequest, NextApiResponse } from "next";
import { Deal, DEALS } from "./deals";

type Data = {
	deals: Deal[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ deals: DEALS });
}
