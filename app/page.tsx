import { Button, Header, IntroTitle, Spacing, Sponsor } from "@/components";
import Logo from "@/public/logo.png";
import GoogleLogo from '@/public/sample-google.webp'
import { FaGithub } from "react-icons/fa";

export default function Home() {
    const headerPath = [
        { name: '제품소개', href: '/product' },
        { name: '가격안내', href: '/pricing' },
        { name: '고객센터', href: '/contact' },
        { name: '회사소개', href: '/' },
    ];

    const SponsorList = [
        {
            name: 'Google',
            logo: GoogleLogo
        },
        {
            name: 'Google',
            logo: GoogleLogo
        },
        {
            name: 'Google',
            logo: GoogleLogo
        },
        {
            name: 'Google',
            logo: GoogleLogo
        },
        {
            name: 'Google',
            logo: GoogleLogo
        },
        {
            name: 'Google',
            logo: GoogleLogo
        },
        {
            name: 'Google',
            logo: GoogleLogo
        },
    ]
	return (
		<main>
            <Header logo={Logo} backgroundColor="#000000" menu={headerPath}>
                <Button backgroundColor="#fff" color="#000" href="/login" borderRadius="medium">로그인</Button>
                <Button href="/login" borderRadius="medium"><FaGithub /> Github</Button>
            </Header>
            <Spacing height={100} />
            <IntroTitle type="column" title="The landing page template for NEXT.js developers" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." titleFontSize={55}>
                <Button href="/login" fontSize={16} borderRadius="big" styles={{ padding: '5px 30px'}}><FaGithub /> Github</Button>
            </IntroTitle>
            <Spacing height={120} />
            <Sponsor title="Trust By over 1200+ customer" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" SponsorList={SponsorList} grayScaleMode={true} />
		</main>
	);
}
