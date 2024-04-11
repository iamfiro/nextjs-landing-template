import { SponsorProps } from '@/types/components';
import style from './style.module.scss';
import Image from 'next/image';

const Sponsor = ({ title, description, styles, SponsorList, titleColor, titleFontSize, grayScaleMode }: SponsorProps) => {
    return (
        <section className={style.container} style={styles}>
            <h2 className={style.sponsor_title} style={{ color: titleColor, fontSize: titleFontSize }}>{title}</h2>
            <span className={style.sponsor_description}>{description}</span>
            <div className={style.sponsor_list} data-gray={grayScaleMode}>
                {SponsorList?.map((sponsor, index) => {
                    return <Image key={index} src={sponsor.logo} alt={sponsor.name} />
                })}
            </div>
        </section>
    )
};

export default Sponsor;