import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";
export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = () => {
    if (!email && !password && !name) {
      ToastAndroid.show("Please enter all details", ToastAndroid.LONG);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        router.replace("/mytrip");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("--", errorMessage, errorCode);
      });
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 20,
        }}
      >
        Create New Account
      </Text>
      <View
        style={{
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity
        onPress={OnCreateAccount}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
        onPress={() => router.replace("auth/sign-in")}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit",
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
});
