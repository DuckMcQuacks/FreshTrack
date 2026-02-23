import AsyncStorage from '@react-native-async-storage/async-storage';
import { StoredProduce } from './StoredProduce';

const KEY = 'FRIDGE_ITEMS';

export async function getItems(): Promise<StoredProduce[]> {
  const json = await AsyncStorage.getItem(KEY);

  if (!json) return [];

  try {
    return JSON.parse(json) as StoredProduce[];
  } catch {
    return [];
  }
}

export async function saveItems(items : StoredProduce[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(items));
}
export async function addItem(item : StoredProduce) {
  const items = await getItems();
  console.log("WRITING ITEMS:", items);
  items.push(item);

  await saveItems(items);
}
export async function removeItem(id : number) {
  const items = await getItems();

  const filtered = items.filter((item : StoredProduce) => item.id !== id);

  await saveItems(filtered);
}
export async function updateQuantity(id : number, quantity : number) {
  const items = await getItems();

  const updated = items.map((item : StoredProduce) =>
    item.id === id ? { ...item, quantity } : item
  );

  await saveItems(updated);
}