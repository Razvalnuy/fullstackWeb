import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from "@/components/shared"

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					{/* Фильтрация */}
					<div className="w-[250px]">
						<Filters />
					</div>

					{/* Список товаров */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title={"Пиццы"}
								categoryId={1}
								items={[
									{
										id: 1,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/11ef6138ec6490b6a4585d95adbda82f.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 2,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/11ef6138ec6490b6a4585d95adbda82f.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 3,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/11ef6138ec6490b6a4585d95adbda82f.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 4,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/11ef6138ec6490b6a4585d95adbda82f.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 5,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/11ef6138ec6490b6a4585d95adbda82f.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 6,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/11ef6138ec6490b6a4585d95adbda82f.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 7,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/11ef6138ec6490b6a4585d95adbda82f.avif",
										price: 666,
										items: [{ price: 777 }],
									},
								]}
							/>
							<ProductsGroupList
								title={"Комбо"}
								categoryId={2}
								items={[
									{
										id: 1,
										name: "Завтрак-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 222,
										items: [{ price: 333 }],
									},
									{
										id: 2,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 222,
										items: [{ price: 333 }],
									},
									{
										id: 3,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 131,
										items: [{ price: 122 }],
									},
									{
										id: 4,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 5,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 6,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 7,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
								]}
							/>
							<ProductsGroupList
								title={"Закуски"}
								categoryId={3}
								items={[
									{
										id: 1,
										name: "Завтрак-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 222,
										items: [{ price: 333 }],
									},
									{
										id: 2,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 222,
										items: [{ price: 333 }],
									},
									{
										id: 3,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 131,
										items: [{ price: 122 }],
									},
									{
										id: 4,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 5,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 6,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
									{
										id: 7,
										name: "Чизбургер-пицца",
										imageUrl:
											"https://media.dodostatic.net/image/r:584x584/0194b1fb1f2f7511999d554504e2d8bd.avif",
										price: 666,
										items: [{ price: 777 }],
									},
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
