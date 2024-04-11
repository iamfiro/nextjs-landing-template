import { IntroTitleProps } from '@/types/landing/components';
import style from './style.module.scss'

export const IntroTitle = ({ type, title, description, titleFontSize = 40, children, styles }: IntroTitleProps) => {
    const fontSize = `${titleFontSize}px`;
    switch (type) {
        case 'column':
            return (
                <section className={style.column} style={styles}>
                    <h1 className={style.column_title} style={{ fontSize: fontSize, lineHeight: fontSize }}>{title}</h1>
                    <span className={style.column_description}>{description}</span>
                    <div className={style.column_button_container}>
                        {children}
                    </div>
                </section>
            )
        case 'row':
            return (
                <section className={style.row} style={styles}>
                    <h1 className={style.row_title} style={{ fontSize: fontSize, lineHeight: fontSize }}>{title}</h1>
                    <div className={style.row_right}>
                        <span>Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</span>
                    </div>
                </section>
            )
    }
}

export default IntroTitle;