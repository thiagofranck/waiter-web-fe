import closeIcon from '../../assets/images/close-icon.svg';

import { Overlay, ModalBody } from './styles';

interface OrderModalProps {
  visible: boolean
}

export function OrderModal({visible}: OrderModalProps) {
  if(!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>

          <button type='button'>
            <img src={closeIcon} alt="Icone para Fechar" />
          </button>
        </header>
      </ModalBody>
    </Overlay>
  );
}
