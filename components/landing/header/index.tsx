import { HeaderProps } from '@/types/components';
import style from './style.module.scss';
import Image from 'next/image';
import { headers } from 'next/headers';

const Header = ({ logo, menu, children, logoWidth = 20, styles }: HeaderProps) => {
    const path = headers().get('x-pathname') || '/';

    return (
        <header className={style.container} style={styles}>
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