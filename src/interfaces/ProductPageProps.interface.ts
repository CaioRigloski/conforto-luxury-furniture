import { Product } from "@prisma/client"
import ErrorResponse from "./ErrorResponse.interface"

export default interface ProductsPageProps {
  category: string
  products?: Product[] | undefined
  error?: ErrorResponse | undefined
}