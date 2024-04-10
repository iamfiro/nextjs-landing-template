import { Header } from "@/components";
import { HeaderButton } from "@/components/header";
import Logo from "@/public/logo.png";

export default function Home() {
    const headerPath = [
        { name: '제품소개', href: '/product' },
        { name: '가격안내', href: '/pricing' },
        { name: '고객센터', href: '/contact' },
        { name: '회사소개', href: '/' },
    ];
	return (
		<main>
            <Header logo={Logo} backgroundColor="#000000" menu={headerPath}>
                <HeaderButton backgroundColor="#fff" color="#000" href="/login" borderRadius="medium">로그인</HeaderButton>
                <HeaderButton href="/login" borderRadius="medium">무료로 시작하기</HeaderButton>
            </Header>
		</main>
	);
}
