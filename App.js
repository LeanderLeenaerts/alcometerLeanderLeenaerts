import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Styles, DarkStyles } from "./styles/Styles";
import { RadioButton } from "react-native-paper";
import NumericInput from "react-native-numeric-input";

export default function App() {
  const [isDark, setDark] = useState(false);

  const [weight, setWeight] = useState(0);
  const [amountBottles, setAmountBottles] = useState(0);
  const [amountHours, setAmountHours] = useState(0);

  const [gender, setGender] = useState("Male");

  const [show, setShow] = useState(false);

  const [result, setResult] = useState(0);

  const myStyle = isDark ? DarkStyles : Styles;

  const bottleChange = () => {
    if (amountBottles > 0) {
      setAmountBottles(amountBottles - 1);
    }
  };
  const checkweight = (x) => {
    console.log(x);
    if (x > 0) {
      setWeight(x);
    } else {
      setWeight(0);
    }
  };

  const calculate = () => {
    let litres = amountBottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * amountHours;
    let resultMale = 0;
    let resultfemale = 0;
    let temp = 0;
    if (weight > 0) {
      resultMale = gramsLeft / (weight * 0.7);
      resultfemale = gramsLeft / (weight * 0.6);

      console.log("Male" + resultMale);
      console.log("Female" + resultfemale);

      if (gender == "Male") {
        temp = resultMale;
      }
      if (gender == "Female") {
        temp = resultfemale;
      }
      if (temp < 0) {
        temp = 0;
      }
      console.log(temp);
      setResult(temp);
      setShow(true);
    } else {
      temp = 0;
      setShow(false);
    }
  };

  return (
    <ScrollView style={myStyle.container}>
      <Switch
        value={isDark}
        onValueChange={() => setDark(!isDark)}
        thumbColor={myStyle.container.backgroundColor}
      />
      <Text style={myStyle.title}>Alcometer</Text>
      <Text style={myStyle.label}>Weight</Text>
      <TextInput
        style={myStyle.input}
        //onChangeText={setWeight}
        onChangeText={(value) => checkweight(value)}
        value={weight}
        keyboardType="numeric"
        placeholder="Give weight"
      />

      <Text style={myStyle.label}>Bottles</Text>

      <NumericInput
        value={amountBottles}
        onChange={(value) => setAmountBottles(value)}
        minValue={0}
        rounded
        containerStyle={myStyle.counter}
        rightButtonBackgroundColor="#a468e0"
        leftButtonBackgroundColor="#a468e0"
      />

      <Text style={myStyle.label}>Hours</Text>

      <NumericInput
        value={amountHours}
        onChange={(value) => setAmountHours(value)}
        minValue={0}
        rounded
        containerStyle={myStyle.counter}
        rightButtonBackgroundColor="#a468e0"
        leftButtonBackgroundColor="#a468e0"
      />

      <RadioButton.Group
        onValueChange={(value) => setGender(value)}
        value={gender}
      >
        <View style={{ flexDirection: "row" }}>
          <RadioButton value="Male" />
          <Text style={{ marginLeft: 10, marginTop: 7 }}>Male</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RadioButton value="Female" />
          <Text style={{ marginLeft: 10, marginTop: 7 }}>Female</Text>
        </View>
      </RadioButton.Group>

      <Button color={"#a468e0"} title="Calculate" onPress={calculate} />

      {show ? (
        <Text style={myStyle.result}>
          The result is: {parseFloat(result).toFixed(2)}
        </Text>
      ) : (
        <Text></Text>
      )}

      {weight <= 0 ? (
        <Text style={myStyle.warning}>Please fill in weight</Text>
      ) : (
        <Text></Text>
      )}
    </ScrollView>
  );
}
