import { ButtonHTMLAttributes } from 'react';

import { PrimaryButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <PrimaryButton {...props} />
    )
}