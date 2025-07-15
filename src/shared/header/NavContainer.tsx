export default function NavContainer() {
	return (
		<div className="flex-1 h-full hidden sm:block">
			<div className="flex w-full justify-end items-center gap-2 h-full">
				<button className="bg-blue-100 px-2 py-1 rounded-md">
					구독하기
				</button>
				<button className="bg-blue-100 px-2 py-1 rounded-md">
					검색하기
				</button>
			</div>
		</div>
	)
}
