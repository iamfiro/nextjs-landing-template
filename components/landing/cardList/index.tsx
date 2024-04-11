import { CardListProps } from '@/types/landing/components';
import style from './style.module.scss';
import Image from 'next/image';

const CardList = ({ title, description, list, styles }: CardListProps) => {
    return (
        <section className={style.container} style={styles}>
            <h3 className={style.card_title}>{title}</h3>
            <span className={style.card_description}>{description}</span>
            <ul className={style.card_list}>
                {list.map((item, index) => (
                    <li key={index} className={style.card_item}>
                        <Image src={item.icon} alt={item.title} />
                        <h4 className={style.card_item_title}>{item.title}</h4>
                        <span className={style.card_item_description}>{item.description}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default CardList;