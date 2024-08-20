import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/ladt.jpg")}
        style={{
          width: 370,
          height: 450,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 28,
            textAlign: "center",
          }}
        >
          Route Rover
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          It is your go-to app for effortless navigation and trip planning.
          Discover the best routes, avoid traffic, and explore new destinations
          with real-time updates and smart recommendations.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 16,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 15,
  },
  button: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
  },
});
