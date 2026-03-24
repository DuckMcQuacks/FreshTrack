import { StyleSheet, Text, View, Button, ListRenderItem, FlatList, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import useFridge from '@/typeScriptComponents/UseFridge';
import { StoredProduce } from '@/typeScriptComponents/StoredProduce';
import StoredProduceView from '@/components/StoredProduceView';

const Fridge = () => {
  const router = useRouter();
  const { items, remove, update, loading } = useFridge();
  const [switchedCardId, setSwitchedCardId] = React.useState<number>(0);

  const renderItem: ListRenderItem<StoredProduce> = ({ item }) => (
    <StoredProduceView
      item={item}
      switchedCardId={switchedCardId}
      switchCard={() => setSwitchedCardId(item.id)}
      onRemove={remove}
      onUpdate={update}
    />
  );

  return (
    <View>
      <Text>fridge</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Pressable onPress={() => setSwitchedCardId(0)}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <Text>
            Padding to make sure I can click something to actually test my pressable function!
          </Text>
        </Pressable>
      )}

      <Button
        title="Add produce to fridge"
        onPress={() => {
          router.push("/chooseProduce");
        }}
      />
    </View>
  );
};

export default Fridge;

const styles = StyleSheet.create({});