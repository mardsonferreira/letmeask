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

    h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
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

    p {
        font-size: 14px;
        color: var(--gray-secondary);
        margin-top: 16px;

        a {
            color: var(--pink-primary);
        }

    }
`;
