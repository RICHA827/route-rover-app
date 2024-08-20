import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-outline" size={32} color="black" />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 25,
        }}
      >
        No trip planned yet
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel experience! Get Started below
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          borderRadius: 15,
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.WHITE,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
