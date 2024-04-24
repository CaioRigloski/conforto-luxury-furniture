import { product } from "@prisma/client"
import ErrorResponse from "./ErrorResponse.interface"

export default interface ProductsPageProps {
  category: string
  products?: product[] | undefined
  error?: ErrorResponse | undefined
}