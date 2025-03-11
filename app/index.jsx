import React, { useState, useEffect } from "react";
import {
    Text, View, StyleSheet, ActivityIndicator, Image, Button, TouchableOpacity
} from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios";

export default function UserScreen() {
    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const styles = createStyles();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    "https://random-data-api.com/api/users/random_user?size=80"
                );
                setUsers(response.data);
                setLoading(false);
            } catch (e) {
                setError("Failed to fetch data. Please try again.");
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />

            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : users.length > 0 ? (
                <View style={styles.userCard}>
                    {/* User Avatar */}
                    <Image
                        source={{ uri: users[currentIndex].avatar }}
                        style={styles.avatar}
                    />

                    {/* User Information */}
                    <Text style={styles.userText}>ID: {users[currentIndex].id}</Text>
                    <Text style={styles.userText}>
                        Name: {users[currentIndex].first_name}
                    </Text>
                    <Text style={styles.userText}>
                        Username: {users[currentIndex].username}
                    </Text>
                    <Text style={styles.userText}>
                        Email: {users[currentIndex].email}
                    </Text>
                    <Text style={styles.userText}>
                        Password: {users[currentIndex].password}
                    </Text>

                    {/* Navigation Buttons */}
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Previous"
                            style={styles.button}
                            onPress={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                            disabled={currentIndex === 0}
                        />
                        <Button
                            title="Next"
                            style={styles.button}
                            onPress={() => setCurrentIndex(prev => Math.min(prev + 1, users.length - 1))}
                            disabled={currentIndex === users.length - 1}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.copyrightText}>©2025 Hritvik Soni</Text>
                    </View>
                </View>
            ) : (
                <Text>No users found</Text>
            )}
        </SafeAreaProvider>
    );
}

function createStyles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f4f4f4", // Light background
            paddingHorizontal: 20,
        },
        userText: {
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5,
            color: "#333",
        },
        avatar: {
            width: 120,
            height: 120,
            borderRadius: 60, // Circular image
            marginBottom: 15,
            borderWidth: 2,
            borderColor: "#007BFF",
        },
        userCard: {
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5, // For Android shadow
            width: "90%",
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "space-between",
            width: "80%",
        },
        button: {
            borderRadius: 15,
            borderWidth: 3,
            borderColor: "black",
        },
        footer:{
            marginTop: 15,
            justifyContent: "center",
            alignItems: "center",
        }
    });
}
