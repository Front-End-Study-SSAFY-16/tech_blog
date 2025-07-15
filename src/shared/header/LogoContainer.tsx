import Image from 'next/image'
import Link from 'next/link'

export default function LogoContainer() {
	return (
		<div className="h-full  flex items-center">
			<Link href="/">
				<Image
					src="/assets/logo.svg"
					alt="logo"
					width={130}
					height={40}
				/>
			</Link>
		</div>
	)
}
