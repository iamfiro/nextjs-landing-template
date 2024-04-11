import { borderRadiusValue, ButtonProps } from "@/types/landing/components";
import style from './style.module.scss';

const Button = ({
    children,
    href,
    backgroundColor = '#000',
    color = '#fff',
    borderRadius = 'small',
    height = 40,
    fontSize = 14,
    styles
}: ButtonProps) => {
    const radius = borderRadiusValue[borderRadius] || '4px';

    return (
        <a
            href={href}
            className={style.button}
            style={{ 
                backgroundColor,
                color, 
                borderRadius: radius,
                height: `${height}px`,
                fontSize,
                ...styles
            }}
        >{children}</a>
    )
};

export default Button;