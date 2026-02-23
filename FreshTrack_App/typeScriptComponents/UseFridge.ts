import { useEffect, useState, useCallback } from 'react';
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

  const add = useCallback(async (food: StoredProduce) => {
    await addItem(food);
    await refresh();
  }, [refresh]);

  const remove = useCallback(async (id: number) => {
    await removeItem(id);
    await refresh();
  }, [refresh]);

  const update = useCallback(async (id: number, quantity: number) => {
    await updateQuantity(id, quantity);
    await refresh();
  }, [refresh]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { items, add, remove, update, loading };
}