"use client"

import { useFilters, useIngredients, useQueryFilters } from "@/hooks"
import React from "react"
import { CheckboxFiltersGroup, RangeSlider, Title } from "../shared"
import { Input } from "../ui"

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients() //Для ингредиентов
	const filters = useFilters() //Для фильтрации

	useQueryFilters(filters)

	const items = ingredients.map((item) => ({
		value: String(item.id),
		text: item.name,
	}))

	const updatePrices = (prices: number[]) => {
		console.log(999)
		filters.setPrices("priceFrom", prices[0])
		filters.setPrices("priceTo", prices[1])
	}

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

			{/* верхние чекбоксы */}
			<CheckboxFiltersGroup
				title="Тип теста"
				name="pizzaTypes"
				className="mb-5"
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				items={[
					{ text: "Тонкое", value: "1" },
					{ text: "Традиционное", value: "2" },
				]}
			/>

			<CheckboxFiltersGroup
				title="Размеры"
				name="sizes"
				className="mb-5"
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
				items={[
					{ text: "20 см", value: "20" },
					{ text: "30 см", value: "30" },
					{ text: "40 см", value: "40" },
				]}
			/>

			{/* фильтр цен */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom || "0")}
						onChange={(e) =>
							filters.setPrices("priceFrom", Number(e.target.value))
						}
					/>
					<Input
						type="number"
						placeholder="1000"
						min={100}
						max={1000}
						value={String(filters.prices.priceTo || "1000")}
						onChange={(e) =>
							filters.setPrices("priceTo", Number(e.target.value))
						}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 1000,
					]}
					onValueChange={updatePrices}
				/>

				<CheckboxFiltersGroup
					title="Ингридиенты"
					name="ingredients"
					className="mt-[70px]"
					limit={6}
					defaultItems={items.slice(0, 6)}
					items={items}
					loading={loading}
					onClickCheckbox={filters.setSelectedIngredients}
					selected={filters.selectedIngredients}
				/>
			</div>
		</div>
	)
}
