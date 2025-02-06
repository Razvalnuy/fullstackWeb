"use client"

import React, { useState } from "react"
import { Input } from "../ui"
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox"

type item = FilterCheckboxProps

interface Props {
	title: string
	items: item[] // все чекбоксы
	defaultItems: item[] //ограниченное кол-во чекбоксов
	limit?: number
	searchInputPlaceholder?: string
	onChange: (value: string[]) => void
	defaultValue?: string[]
	className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
	className,
	onChange,
	defaultValue,
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState("")

	const list = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: defaultItems.slice(0, limit)

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
						onChange={onChangeSearchInput}
					/>
				</div>
			)}
			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={(ids) => console.log(ids)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
					<button
						className="text-primary mt-3"
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			)}
		</div>
	)
}
