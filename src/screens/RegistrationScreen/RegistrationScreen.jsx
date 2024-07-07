import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.photo_bg}></View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.input_wrapper}>
          <TextInput placeholder="Логін" style={styles.input} />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <TextInput placeholder="Пароль" style={styles.input} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    marginTop: 235,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  photo_bg: {
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    width: 120,
    height: 120,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 30,
    letterSpacing: 0.01,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  input_wrapper: {
    marginLeft: 16,
    paddingRight: 16,
  },
});

export default RegistrationScreen;
