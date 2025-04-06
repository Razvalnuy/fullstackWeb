import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from "@/components/shared"
import { getCategoriesWithProducts } from "@/lib/get-categories"

export default async function Home() {
	const categories = await getCategoriesWithProducts()

	const nonEmptyCategories = categories.filter(
		(category) => category.products.length > 0
	)

	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<TopBar
				categories={nonEmptyCategories.filter(
					(category) => category.products.length > 0
				)}
			/>

			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					{/* Фильтрация */}
					<div className="w-[250px]">
						<Filters />
					</div>

					{/* Список товаров */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							{categories.map(
								(category) =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categoryId={category.id}
											items={category.products}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
