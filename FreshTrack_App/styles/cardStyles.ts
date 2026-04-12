import { StyleSheet, useWindowDimensions } from 'react-native';

const { width, height } = useWindowDimensions();

const CardStyles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    backgroundColor: "EAF6FB",
    marginVertical: 12,
    borderRadius: 12,
    height: height *0.2,
  },
  infoArea:{
    flex: 1,
    flexDirection: "column"
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
    fontWeight: "bold"
  }

});

export default CardStyles