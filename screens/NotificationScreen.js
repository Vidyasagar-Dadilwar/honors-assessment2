// screens/NotificationScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";

const NotificationScreen = () => {
  const notifications = [
    {
      id: "1",
      title: "LIMITED-TIME PROMO - UP TO 50% OFF",
      content:
        "Get up to 50% off on all sport shoes. Check out our latest collection now!",
    },
    {
      id: "2",
      title: "FLASH SALE ALERT - SAVE BIG TODAY!",
      content:
        "Our flash sale is live! Great deals on sports shoes. This offer won't last long!",
    },
    {
      id: "3",
      title: "GOOD MORNING, RUNNER!",
      content: "It's time to step out and run. Find comfort in every step.",
    },
    {
      id: "4",
      title: "EXCLUSIVE DISCOUNT JUST FOR YOU",
      content:
        "We've prepared an exclusive 15% discount on all shoes. Use the code RUNFREE15.",
    },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity>
          <Text style={styles.headerAction}>Mark as read</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
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

export default NotificationScreen;
