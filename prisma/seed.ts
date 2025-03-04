import { hashSync } from "bcrypt"
import { prisma } from "./prisma-client"

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: "razvalnuy",
				email: "razvalnuy@gmail.com",
				password: hashSync("111111", 10),
				verified: new Date(),
				role: "USER",
			},
			{
				fullName: "ADMIN",
				email: "admin@gmail.com",
				password: hashSync("111111", 10),
				verified: new Date(),
				role: "ADMIN",
			},
		],
	})
}

async function down() {
	// очистка бд
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (err) {
		console.log(err)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
