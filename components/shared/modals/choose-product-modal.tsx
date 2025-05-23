"use client"

import { Dialog } from "@/components/ui"
import { DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Product } from "@prisma/client"
import { useRouter } from "next/navigation"
import React from "react"
import { Title } from "../title"

interface Props {
	product: Product
	className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter()
	return (
		<div className={className}>
			<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
				<DialogContent
					className={cn(
						"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
						className
					)}
				>
					<Title text={product.name} />
				</DialogContent>
			</Dialog>
		</div>
	)
}
