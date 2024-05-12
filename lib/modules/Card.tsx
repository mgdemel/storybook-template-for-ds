import React from 'react';
import TextSection, { TextSectionProps } from '../sections/TextSection/TextSection';
import Button, { ButtonProps } from '../components/Button/Button';
import Logo, { LogoProps } from '../components/Logo';
import './Card.css';

export interface CardProps {
  textSectionProps: TextSectionProps;
  buttonProps: ButtonProps;
  logoProps: LogoProps;
}

const Card: React.FC<CardProps> = ({ textSectionProps, buttonProps, logoProps }) => {
  return (
    <div className="Card">
      <TextSection {...textSectionProps} />
      <Button {...buttonProps} />
      <Logo {...logoProps} />
    </div>
  );
};

export default Card;
