import Image from 'next/image'

export default function MobileMenuContainer() {
	return (
		<div className="flex-1 h-full block sm:hidden">
			<div className="flex w-full justify-end items-center gap-2 h-full">
				<div className="cursor-pointer">
					{/* 임시 */}
					<Image
						src="/assets/search-icon.svg"
						alt="search"
						width={20}
						height={20}
					/>
				</div>
			</div>
		</div>
	)
}
