import Modal from 'react-modal';

import deleteDangerImg from '../../assets/images/deleteDanger.svg';

import {Container, Content, Header, CancelButton, ConfirmButton, Footer} from './styles';
import { ModalProps } from './types';

export function ModalComponent({ isOpen, title, subtitle, onAccept, onCancel}: ModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onCancel} style={Container}>
            <Content>
                <Header>
                    <img src={deleteDangerImg} alt="delete" />
                    <h2>{title}</h2>
                    <span>{subtitle}</span>
                </Header>
                <Footer>
                    <CancelButton onClick={onCancel}>
                        Cancel
                    </CancelButton>
                    <ConfirmButton onClick={onAccept}>
                        Confirm
                    </ConfirmButton>
                </Footer>
            </Content>
        </Modal>
    );
}