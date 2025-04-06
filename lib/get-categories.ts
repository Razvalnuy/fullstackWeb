import { prisma } from "@/prisma/prisma-client"

export const getCategoriesWithProducts = async () => {
	try {
		const categories = await prisma.category.findMany({
			include: {
				products: {
					include: {
						ingredients: true,
						items: true,
					},
				},
			},
		})
		return categories
	} catch (err) {
		console.error("Ошибка при получении категорий:", err)
		return []
	}
}
