"use client"

import React, { useState } from "react"
import { Input, Skeleton } from "../ui"
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox"

type item = FilterCheckboxProps

interface Props {
	title: string
	items: item[] // все чекбоксы
	defaultItems?: item[] //ограниченное кол-во чекбоксов
	limit?: number
	loading?: Boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	selected: Set<String>
	name?: string
	className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	loading = false,
	searchInputPlaceholder = "Поиск...",
	className,
	onClickCheckbox,
	selected,
	defaultValue,
	name,
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState("")

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return (
			<div className={className}>
				<p className="font-bold mb-3">{title}</p>

				{...Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
					))}
				<Skeleton className="w-28 h-6 mb-4 rounded-[8px] " />
			</div>
		)
	}

	const list = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: (defaultItems || items).slice(0, limit)

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
						checked={selected?.has(item.value)}
						onCheckedChange={(ids) => onClickCheckbox?.(item.value)}
						name={name}
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
