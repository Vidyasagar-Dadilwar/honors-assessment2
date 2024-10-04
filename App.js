import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const categories = [
    { id: "1", name: "FOOTWEAR", icon: "footsteps" },
    { id: "2", name: "BAGS", icon: "bag-handle" },
    { id: "3", name: "APPAREL", icon: "shirt" },
  ];

  const products = [
    {
      id: "1",
      name: "AIR LEGKIND SPORT",
      price: "Rp2.000.000",
      image: require("./assets/product1.png"),
    },
    {
      id: "2",
      name: "ULTRA SPORT INVINITY MAX",
      price: "Rp2.500.000",
      image: require("./assets/product2.png"),
    },
    {
      id: "3",
      name: "SPORT+ RUNNER BLUE EDITION",
      price: "Rp1.800.000",
      image: require("./assets/product3.png"),
    },
    {
      id: "4",
      name: "SPORT+ BAG",
      price: "Rp500.000",
      image: require("./assets/product4.png"),
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Ionicons name={item.icon} size={24} color="#000" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sport Shoes</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={24} color="#000" />
          <Ionicons name="cart-outline" size={24} color="#000" />
          <Ionicons name="menu-outline" size={24} color="#000" />
        </View>
      </View>

      <View style={styles.bannerSlide}>
        <Image
          source={require("./assets/banner.png")}
          style={styles.bannerImage}
        />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>15% OFF</Text>
          <Text style={styles.bannerSubtitle}>FLASH SALE</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>SHOP BY CATEGORY</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>FOR YOU</Text>
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.productRow}
    />
  );
};


const WishlistScreen = () => {
  const wishlistItems = [
    {
      id: "1",
      name: "ADHI SPORT INFINITY PRD",
      price: "Rp2.500.000",
      image: require("./assets/product1.png"),
    },
    {
      id: "2",
      name: "SPORT+ WINNURABLE PRD",
      price: "Rp2.000.000",
      image: require("./assets/product2.png"),
    },
    {
      id: "3",
      name: "SPORT SNEAKERS - BLUE",
      price: "Rp2.500.000",
      image: require("./assets/product3.png"),
    },
    {
      id: "4",
      name: "SPORT+ WINNURABLE MAX",
      price: "Rp3.000.000",
      image: require("./assets/product4.png"),
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

const NotificationScreen = () => {
  const notifications = [
    {
      id: "1",
      title: "LIMITED-TIME PROMO - UP TO 50% OFF",
      content:
        "Don't miss this special opportunity! Get up to 50% off on all sport shoes. Check out our latest collection now!",
    },
    {
      id: "2",
      title: "FLASH SALE ALERT - SAVE BIG TODAY!",
      content:
        "Hurry, our flash sale is live! Great deals on your favorite sports shoes at unbeatable prices. This offer won't last long!",
    },
    {
      id: "3",
      title: "GOOD MORNING, RUNNER!",
      content:
        "It's time to step out and run. Give your best to your body today. Find comfort in every step.",
    },
    {
      id: "4",
      title: "EXCLUSIVE DISCOUNT JUST FOR YOU",
      content:
        "Hello there! We've prepared you with an exclusive 15% discount on all our shoes products. Use the code RUNFREE15",
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

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Wishlist") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FF6347",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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

export default App;