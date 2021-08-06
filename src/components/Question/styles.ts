import styled from 'styled-components';

export const Container = styled.div.attrs((props) => ({
    className: props.className,
}))`
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

    &.highlighted {
        background: var(--highlighted);
        border: 1px solid var(--purple-primary);
    }

    &.answered {
        background: var(--gray-tertiary);
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    > div {
        display: flex;
        gap: 16px;
    }
`;

export const UserInfo = styled.div.attrs((props) => ({
    className: props.className,
}))`
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

    &.highlighted {
        span {
            color: var(--dark-primary);
        }
    }
`;
