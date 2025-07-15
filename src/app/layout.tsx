import Footer from '@/shared/footer/Footer'
import Header from '@/shared/header/Header'
import MainContainer from '@/shared/Layouts/MainContainer'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const NotoSansKR = Noto_Sans_KR({
	variable: '--font-noto-sans-kr',
	subsets: ['latin'],
})

const Pretendard = localFont({
	src: '../../public/fonts/pretendard/PretendardVariable.woff2',
	variable: '--font-pretendard',
	weight: '100 900',
	style: 'normal',
})

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover', // 화면 크기에 맞게 조정
}

export const metadata: Metadata = {
	title: 'Mustard Tech Blog',
	description: 'Mustard Tech Blog',
	icons: {
		icon: '/favicon.ico',
	},
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="ko">
			<body className={`${Pretendard.variable} ${NotoSansKR.variable}`}>
				<div className="flex gap-6 flex-col min-h-screen md:min-w-[700px]">
					<Header />
					<MainContainer>{children}</MainContainer>
					<Footer />
				</div>
			</body>
		</html>
	)
}
