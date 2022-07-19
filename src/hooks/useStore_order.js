import create from 'zustand';
import {persist} from 'zustand/middleware';

const orderStore = set => ({
  orders: [],
  addOrderItem: (items, id, price) => {
    set(state => ({
      orders: [{orderId: id, price: price, orderItems: items}, ...state.orders],
    }));
  },
});

const useStoreOrder = create(persist(orderStore, {name: 'order'}));

export default useStoreOrder;
