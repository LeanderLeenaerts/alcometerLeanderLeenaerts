import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const Styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center", // Horizontal
  //   justifyContent: "center", // Vertical
  //   backgroundColor: "#ffffff",
  //   marginTop: Constants.statusBarHeight + 10,
  //   // padding:10,
  //   // flexDirection:"row",
  // },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5, // can be used because 'Constants'
    //borderWidth: 1,
    //borderRadius: 5,
    //margin: 10,
    //padding: 10,

    backgroundColor: "#ffffff",
  },
  text: {
    // flex:1,

    borderWidth: 2,
    backgroundColor: "#0cc522",
    padding: 3,
    borderRadius: 5,

    // width:100
  },
  title: {
    fontSize: 40,
    color: "#a468e0",
    fontWeight: "bold",
    paddingBottom: 20,
    marginLeft: 10,
  },
  label: {
    color: "#a468e0",
    margin: 2,
    fontSize: 15,
    marginLeft: 10,
  },
  input: {
    marginLeft: 30,
    maxWidth: 150,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  counter: {
    margin: 10,
    backgroundColor: "#7f51ac",
    marginLeft: 30,
  },
  result: {
    fontSize: 20,
    color: "#a655f8",
    paddingTop: 10,
    marginLeft: 10,
  },
  warning: {
    fontSize: 25,
    color: "red",
    marginLeft: 10,
  },
});

const DarkStyles = StyleSheet.create({
  container: {
    ...Styles.container,
    backgroundColor: "#0000003d",
  },
  text: {
    ...Styles.text,
  },
  title: {
    ...Styles.title,
    color: "#50d0f3",
  },
  label: {
    ...Styles.label,
    color: "#50d0f3",
  },
  input: {
    ...Styles.input,
  },
  counter: {
    ...Styles.counter,
  },

  result: {
    ...Styles.result,
    color: "#50d0f3",
  },
  warning: {
    ...Styles.warning,
    color: "#50d0f3",
  },
});

export { Styles, DarkStyles };
