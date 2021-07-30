import styled from 'styled-components';

export const Container = styled.div`
    background: var(--white-quaternary);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    p {
        color: var(--dark-primary);
    }

    & + div {
        margin-top: 8px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
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
        color: var(--gray-secondary);
        font-size: 14px;
    }
`;
