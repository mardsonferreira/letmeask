import styled from 'styled-components';

export const RoomCodeButton = styled.button`
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    
    background: var(--white-primary);
    border: 1px solid var(--purple-primary);
    cursor: pointer;
    
    display: flex;

    div {
        background: var(--purple-primary);
        padding: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;
        width: 240px;
        font-size: 14px;
        font-weight: 500;
    }
`;