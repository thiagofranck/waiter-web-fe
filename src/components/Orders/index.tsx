import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63db10628baf2876c25a4f04',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1675217349998-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '63db10628baf2876c25a4f05'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1675300100996-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63db10628baf2876c25a4f06'
      }
    ],
  }
];


export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✔"
        title="Pronto"
        orders={[]}
      />

    </Container>
  );
}
