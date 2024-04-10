import { Button, Header, IntroTitle, Spacing } from "@/components";
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
                <Button backgroundColor="#fff" color="#000" href="/login" borderRadius="medium">로그인</Button>
                <Button href="/login" borderRadius="medium">무료로 시작하기</Button>
            </Header>
            <Spacing height={100} />
            <IntroTitle type="column" title="고객 상담의 미래는 AI입니다" description="세계 최대 기업에서 사용하는 Next.js를 사용하면 React 구성 요소의 강력한 기능으로 고품질 웹 애플리케이션을 만들 수 있습니다." titleFontSize={55}>
                <Button href="/login" fontSize={18} borderRadius="big" styles={{ padding: '5px 30px'}}>시작하기</Button>
            </IntroTitle>
		</main>
	);
}
