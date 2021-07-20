import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Aside = styled.aside`
    flex: 7;
    background: var(--purple-primary);
    color: var(--white-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    img {
        max-width: 320px;
    }

    strong {
        font: 700 36px 'Poppins', sans-serif;
        line-height: 42px;
        margin-top: 16px;
    }

    p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 16px;
        color: var(--white-secondary);
    }
`;

export const Main = styled.main`
    flex: 8;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
        align-items: center;
    }

    form {
        input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;
            background: #FFF;
            border: 1px solid var(--gray-primary);
        }

        button {
            margin-top: 16px;
        }

        button, input {
            width: 100%;
        }
    }
`;

export const Separator = styled.div`
    font-size: 14px;
    color: var(--gray-primary);
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--gray-primary);
        margin-right: 16px;
    }

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--gray-primary);
        margin-left: 16px;
    }
`;

export const CreateRoomBtn = styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: var(--red-primary);
    color: var(--white-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;