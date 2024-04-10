import { borderRadiusValue, HeaderButtonProps, HeaderProps } from '@/types/components';
import style from './style.module.scss';
import Image from 'next/image';
import { headers } from 'next/headers';

export const HeaderButton = ({
    children,
    href,
    backgroundColor = '#000',
    color = '#fff',
    borderRadius = 'small',
    height = 40
}: HeaderButtonProps) => {
    const radius = borderRadiusValue[borderRadius] || '4px';

    return (
        <a 
            href={href}
            className={style.primaryButton}
            style={{ 
                backgroundColor,
                color, 
                borderRadius: radius,
                height: `${height}px`
            }}
        >{children}</a>
    )
};


const Header = ({ logo, menu, children, logoWidth = 20 }: HeaderProps) => {
    const path = headers().get('x-pathname') || '/';

    return (
        <header className={style.container}>
            <div className={style.left}>
                <Image src={logo} alt="Logo" height={logoWidth} />
                <ul>
                    {menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.href} data-selected={item.href === path}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={style.right}>
                {children}
            </div>
        </header>
    )
};

export default Header;