import { Product } from "@prisma/client"
import { ApiRoutes } from "./constans"
import { axiosInstance } from "./instance"

//? получаем своим данные
export const search = async (query: string): Promise<Product[]> => {
	return (
		await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
			params: { query },
		})
	).data
}
