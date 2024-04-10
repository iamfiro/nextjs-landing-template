import { Header } from "@/components";
import { HeaderButtonPrimary, HeaderButtonSecondary } from "@/components/header";
import Logo from "@/public/logo.png";

export default function Home() {
	return (
		<main>
            <Header logo={Logo} menu={[
                { name: '제품소개', href: '/product' },
                { name: '가격안내', href: '/pricing' },
                { name: '고객센터', href: '/contact' },
                { name: '회사소개', href: '/' },
            ]}>
                <HeaderButtonSecondary href="/login" borderRadius="medium">로그인</HeaderButtonSecondary>
                <HeaderButtonPrimary href="/login" borderRadius="medium">가입하기</HeaderButtonPrimary>
            </Header>
		</main>
	);
}
