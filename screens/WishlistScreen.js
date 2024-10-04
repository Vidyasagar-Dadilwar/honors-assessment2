// screens/WishlistScreen.js
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WishlistScreen = () => {
  const wishlistItems = [
    {
      id: "1",
      name: "ADHI SPORT INFINITY PRD",
      price: "Rp2.500.000",
      image: require("../assets/product1.png"),
    },
    {
      id: "2",
      name: "SPORT+ WINNURABLE PRD",
      price: "Rp2.000.000",
      image: require("../assets/product2.png"),
    },
    {
      id: "3",
      name: "SPORT SNEAKERS - BLUE",
      price: "Rp2.500.000",
      image: require("../assets/product3.png"),
    },
    {
      id: "4",
      name: "SPORT+ WINNURABLE MAX",
      price: "Rp3.000.000",
      image: require("../assets/product4.png"),
    },
  ];

  const renderWishlistItem = ({ item }) => (
    <View style={styles.wishlistItem}>
      <Image source={item.image} style={styles.wishlistImage} />
      <View style={styles.wishlistItemInfo}>
        <Text style={styles.wishlistItemName}>{item.name}</Text>
        <Text style={styles.wishlistItemPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.wishlistItemButton}>
        <Text style={styles.wishlistItemButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="cart-outline" size={24} color="#000" />
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </View>
      </View>
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
  },
  headerAction: {
    color: "#FF6347",
    fontSize: 16,
  },
  wishlistItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  wishlistImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  wishlistItemInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  wishlistItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  wishlistItemPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  wishlistItemButton: {
    backgroundColor: "#FF6347",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "center",
  },
  wishlistItemButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  notificationContent: {
    fontSize: 14,
    color: "#666",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  bannerSlider: {
    height: 150,
  },
  bannerSlide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bannerContent: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerSubtitle: {
    fontSize: 18,
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 16,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 10,
  },
  categoryText: {
    marginTop: 5,
  },
  productRow: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  productItem: {
    width: "48%",
    marginTop: 16,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default WishlistScreen;