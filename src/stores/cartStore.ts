import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types';

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
  calculateTotal: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.product._id === product._id);

        if (existingItem) {
          get().updateQuantity(product._id, existingItem.quantity + quantity);
        } else {
          set(state => ({
            items: [...state.items, { product, quantity }]
          }));
          get().calculateTotal();
        }
      },

      removeItem: (productId: string) => {
        set(state => ({
          items: state.items.filter(item => item.product._id !== productId)
        }));
        get().calculateTotal();
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.product._id === productId
              ? { ...item, quantity }
              : item
          )
        }));
        get().calculateTotal();
      },

      clearCart: () => {
        set({ items: [], total: 0 });
      },

      getItemQuantity: (productId: string) => {
        const { items } = get();
        const item = items.find(item => item.product._id === productId);
        return item?.quantity || 0;
      },

      calculateTotal: () => {
        const { items } = get();
        const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        set({ total });
      }
    }),
    {
      name: 'cart-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.calculateTotal();
        }
      }
    }
  )
);