import React from 'react';
import { TextSectionProps } from '../components/TextSection';
import { ButtonProps } from '../components/Button';
import { LogoProps } from '../components/Logo';
import './Module1.css';
export interface Module1Props {
    textSectionProps: TextSectionProps;
    buttonProps: ButtonProps;
    logoProps: LogoProps;
}
declare const Module1: React.FC<Module1Props>;
export default Module1;
