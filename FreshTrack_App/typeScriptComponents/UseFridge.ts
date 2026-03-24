import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { getItems, addItem, removeItem, updateQuantity } from "./FridgeStorage";
import { StoredProduce } from './StoredProduce';

export default function useFridge() {
  const [items, setItems] = useState<StoredProduce[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const data = await getItems();
    setItems(data);
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  const add = useCallback(async (food: StoredProduce) => {
    setItems(prev => [...prev, food]);
    await addItem(food);
  }, []);

  const remove = useCallback(async (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
    await removeItem(id);
  }, []);

  const update = useCallback(async (id: number, quantity: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, produceCount: quantity } : item
      )
    );
    await updateQuantity(id, quantity);
  }, []);

  return { items, add, remove, update, refresh, loading };
}