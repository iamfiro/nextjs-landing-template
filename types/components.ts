import { StaticImageData } from "next/image";

export type typeBorderRadius = 'none' | 'small' | 'medium' | 'big' | 'full';

export const borderRadiusValue = {
    none: '0',
    small: '5px',
    medium: '8px',
    big: '10px',
    full: '9999px',
};

export interface HeaderHrefList {
    name: string;
    href: string;
}

export interface HeaderProps {
    readonly logo: StaticImageData;
    readonly menu: HeaderHrefList[];
    readonly children?: React.ReactNode;

    logoWidth?: number;
    backgroundColor?: string;
    styles?: React.CSSProperties;
}

export interface ButtonProps {
    readonly children: React.ReactNode;
    readonly href: string;

    backgroundColor?: string;
    color?: string;
    borderRadius?: typeBorderRadius;
    height?: number;
    fontSize?: number;
    styles?: React.CSSProperties;
}

export interface IntroTitleProps {
    type?: 'column' | 'row';
    title?: string;
    description?: string;
    titleFontSize?: number;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
}

export interface SponsorListType {
    name: string;
    logo: StaticImageData;
}

export interface SponsorProps {
    readonly title?: string;
    readonly description?: string;
    readonly titleColor?: string;
    readonly titleFontSize?: number;
    readonly styles?: React.CSSProperties;
    readonly grayScaleMode?: boolean;

    SponsorList?: SponsorListType[];
}