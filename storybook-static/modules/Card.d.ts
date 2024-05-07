import React from 'react';
import { TextSectionProps } from '../components/TextSection';
import { ButtonProps } from '../components/Button';
import { LogoProps } from '../components/Logo';
import './Card.css';
export interface CardProps {
    textSectionProps: TextSectionProps;
    buttonProps: ButtonProps;
    logoProps: LogoProps;
}
declare const Card: React.FC<CardProps>;
export default Card;
