import { PrimaryButton } from './styles';
import { ButtonProps } from './types';

export function Button( { outlined = false, ...props}: ButtonProps ) {
    return (
        <PrimaryButton className={outlined ? 'outlined' : ''}  {...props} />
    );
}