import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Product } from '@prisma/client'
import ErrorResponse from "@/interfaces/ErrorResponse.interface";

const prisma = new PrismaClient()

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[] | ErrorResponse>) {
  try {
    const products: Product[] =  await prisma.product.findMany({
      where: {
        category: req.query.category as string
      }
    })
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({response: "Error querying the database"})
  }
}
