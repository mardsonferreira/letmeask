import styled from 'styled-components';

export const Container = {
    overlay: {
        background: '#050206',
        opacity: '0.8'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
    },
};

export const Content = styled.div`
    width:590px;
    height: 362px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    img {
        width: 48px;
        height: 48px;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: var(--dark-primary);
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--gray-seconday);
    }
`;

export const CancelButton = styled.button`
    height: 48px;
    width: 147px;
    border-radius: 8px;
    font-weight: 500;
    background: var(--gray-tertiary);
    color: var(--gray-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    padding: 0 32px;

    transition: filter 0.2s;
`;

export const ConfirmButton = styled.button`
    height: 48px;
    width: 147px;
    border-radius: 8px;
    font-weight: 500;
    background: var(--red-primary);
    color: var(--white-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    padding: 0 32px;

    transition: filter 0.2s;
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 32px;

    gap: 8px;
`;