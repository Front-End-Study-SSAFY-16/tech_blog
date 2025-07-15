interface MainContainerProps {
	children: React.ReactNode
}

export default function MainContainer({ children }: MainContainerProps) {
	return (
		<div className="flex-1 lg:max-w-content-width w-full mx-auto">
			<div className="px-4">{children}</div>
		</div>
	)
}
