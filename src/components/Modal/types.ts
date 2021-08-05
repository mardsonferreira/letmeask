export interface ModalProps {
    isOpen: boolean;
    title: string;
    subtitle: string;

    onAccept?: () => void;
    onCancel?: () => void;
}