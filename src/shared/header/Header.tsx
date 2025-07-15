import LogoContainer from './LogoContainer'
import MobileMenuContainer from './MobileMenuContainer'
import NavContainer from './NavContainer'

export default function Header() {
	return (
		<nav className="md:h-(--height-nav) h-auto border-b border-gray-100 overflow-y-hidden">
			<div className="w-[calc(100%-2rem)] md:max-w-content-width-md h-(--height-nav) mx-auto ">
				<div className="flex justify-between items-center h-full">
					<LogoContainer />
					<MobileMenuContainer />
					<NavContainer />
				</div>
			</div>
		</nav>
	)
}
