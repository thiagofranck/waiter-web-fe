import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { Overlay, ModalBody, OrderDetails } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if(!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>{order.table}</strong>

          <button type='button'>
            <img src={closeIcon} alt="Icone para Fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>{order.status === 'WAITING' && '🕐'}</span>
            <span>{order.status === 'IN_PRODUCTION' && '👨‍🍳'}</span>
            <span>{order.status === 'DONE' && '✔'}</span>

            <strong>
              <span>{order.status === 'WAITING' && 'Fila de espera'}</span>
              <span>{order.status === 'IN_PRODUCTION' && 'Em produção'}</span>
              <span>{order.status === 'DONE' && 'Pronto'}</span>
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
