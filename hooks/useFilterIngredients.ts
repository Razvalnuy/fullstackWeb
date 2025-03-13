import { Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"
import { useSet } from "react-use"

interface ReturnProps {
	ingredients: Ingredient[]
	loading: Boolean
	selectedIngredients: Set<String>
	onAddId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(false)

	const [selectedIds, { toggle }] = useSet(new Set<String>([]))

	useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (err) {
				console.log(err)
			} finally {
				setLoading(false)
			}
		}
		fetchIngredients()
	}, [])
	return {
		ingredients,
		loading,
		onAddId: toggle,
		selectedIngredients: selectedIds,
	}
}
