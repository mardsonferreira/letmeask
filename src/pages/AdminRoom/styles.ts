import styled from 'styled-components';

export const Container = styled.div`
   
`;

export const Header = styled.header`
    padding: 24px;
    border-bottom: 1px solid var(--white-tertiary);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        max-height: 45px;
    }

    > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
    }
`;

export const Main = styled.main`
    max-width: 800px;
    margin: 0 auto;
`;

export const Title = styled.div`
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: var(--dark-primary);
    }

    span {
        margin-left: 16px;
        background: var(--pink-primary);
        border-radius: 9999px;
        padding: 8px 16px;
        color: var(--white-primary);
        font-weight: 500;
        font-size: 14px;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    span {
        margin-left: 8px;
        color: var(--dark-primary);
        font-weight: 500;
        font-size: 14px;
    }
`;

export const QuestionList = styled.div`
    margin-top: 32px;
`;

export const EmptyQuestion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 128px;
    gap: 8px;

    img {
        width: 284px;
        height: 243px;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: var(--dark-primary);
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: var(--gray-primary);
    }
`;
