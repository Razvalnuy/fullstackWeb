import { Prisma } from "@prisma/client"
import { hashSync } from "bcrypt"
import { categories, ingredients, products } from "./constans"
import { prisma } from "./prisma-client"

const randomDecimalNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

const generateProductItem = ({
	productId,
	pizzaType,
	size,
}: {
	productId: number
	pizzaType?: 1 | 2
	size?: 20 | 30 | 40
}) => {
	return {
		productId,
		price: randomDecimalNumber(190, 600),
		pizzaType,
		size,
	} as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: "Test",
				email: "razval2nuy@gmail.com",
				password: hashSync("111111", 10),
				verified: new Date(),
				role: "USER",
			},
			{
				fullName: "ADMINTest",
				email: "ad1min@gmail.com",
				password: hashSync("111111", 10),
				verified: new Date(),
				role: "ADMIN",
			},
		],
	})

	await prisma.category.createMany({
		data: categories,
	})

	await prisma.ingredient.createMany({
		data: ingredients,
	})

	await prisma.product.createMany({
		data: products,
	})

	const pizza1 = await prisma.product.create({
		data: {
			name: "Пепперони фреш",
			imageUrl:
				"https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(0, 5),
			},
		},
	})

	const pizza2 = await prisma.product.create({
		data: {
			name: "Сырная",
			imageUrl:
				"https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(5, 10),
			},
		},
	})

	const pizza3 = await prisma.product.create({
		data: {
			name: "Чоризо фреш",
			imageUrl:
				"https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(10, 40),
			},
		},
	})

	await prisma.productItem.createMany({
		data: [
			// Пицца "Пепперони фреш"
			generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

			// Пицца "Сырная"
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

			// Пицца "Чоризо фреш"
			generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

			// Остальные продукты
			generateProductItem({ productId: 1 }),
			generateProductItem({ productId: 2 }),
			generateProductItem({ productId: 3 }),
			generateProductItem({ productId: 4 }),
			generateProductItem({ productId: 5 }),
			generateProductItem({ productId: 6 }),
			generateProductItem({ productId: 7 }),
			generateProductItem({ productId: 8 }),
			generateProductItem({ productId: 9 }),
			generateProductItem({ productId: 10 }),
			generateProductItem({ productId: 11 }),
			generateProductItem({ productId: 12 }),
			generateProductItem({ productId: 13 }),
			generateProductItem({ productId: 14 }),
			generateProductItem({ productId: 15 }),
			generateProductItem({ productId: 16 }),
			generateProductItem({ productId: 17 }),
		],
	})

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: "123",
			},
			{
				userId: 2,
				totalAmount: 0,
				token: "222222",
			},
		],
	})

	await prisma.cartItem.create({
		data: {
			productItemId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
			},
		},
	})

	// Отключаем Prisma после выполнения сидера, чтобы очистить соединение и избежать проблем с prepared statements
	await prisma.$disconnect()
}

async function down() {
	await prisma.$executeRawUnsafe(`DEALLOCATE ALL;`) // Очистка всех подготовленных запросов, если они остались

	// Выполняем удаление данных и сбрасываем последовательности для всех таблиц
	await prisma.$transaction([
		prisma.$executeRawUnsafe(`DELETE FROM "User";`),
		prisma.$executeRawUnsafe(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`),
	])

	await prisma.$transaction([
		prisma.$executeRawUnsafe(`DELETE FROM "CartItem";`),
		prisma.$executeRawUnsafe(
			`ALTER SEQUENCE "CartItem_id_seq" RESTART WITH 1;`
		),
	])

	await prisma.$transaction([
		prisma.$executeRawUnsafe(`DELETE FROM "Cart";`),
		prisma.$executeRawUnsafe(`ALTER SEQUENCE "Cart_id_seq" RESTART WITH 1;`),
	])

	await prisma.$transaction([
		prisma.$executeRawUnsafe(`DELETE FROM "ProductItem";`),
		prisma.$executeRawUnsafe(
			`ALTER SEQUENCE "ProductItem_id_seq" RESTART WITH 1;`
		),
	])

	await prisma.$transaction([
		prisma.$executeRawUnsafe(`DELETE FROM "Product";`),
		prisma.$executeRawUnsafe(`ALTER SEQUENCE "Product_id_seq" RESTART WITH 1;`),
	])

	await prisma.$transaction([
		prisma.$executeRawUnsafe(`DELETE FROM "Ingredient";`),
		prisma.$executeRawUnsafe(
			`ALTER SEQUENCE "Ingredient_id_seq" RESTART WITH 1;`
		),
	])

	await prisma.$transaction([
		prisma.$executeRawUnsafe(`DELETE FROM "Category";`),
		prisma.$executeRawUnsafe(
			`ALTER SEQUENCE "Category_id_seq" RESTART WITH 1;`
		),
	])

	// Отключаем Prisma после выполнения удаления
	await prisma.$disconnect()
}

async function main() {
	try {
		await down() // Вначале выполняем удаление данных
		await up() // Затем заполняем базу новыми данными
	} catch (err) {
		console.error(err)
	} finally {
		// В любом случае отключаем Prisma от базы данных
		await prisma.$disconnect()
	}
}


main()
