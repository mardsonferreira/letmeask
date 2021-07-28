import styled from 'styled-components';

export const PrimaryButton = styled.button`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: var(--purple-primary);
    color: var(--white-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    padding: 0 32px;

    transition: filter 0.2s;

    img {
        margin-right: 8px;
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;