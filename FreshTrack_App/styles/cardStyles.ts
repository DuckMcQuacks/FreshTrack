import { StyleSheet, useWindowDimensions } from 'react-native';

const { width, height } = useWindowDimensions();

const CardStyles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "EAF6FB",
    marginVertical: 12,
    marginHorizontal: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    height: height *0.22,
  },
  infoArea:{
    flex: 1,
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },
  image: {
    width: "25%",
    resizeMode: "cover",
    alignSelf: "center",
    height: "75%",
    padding: 10,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  spaceBetweenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  }

});

export default CardStyles