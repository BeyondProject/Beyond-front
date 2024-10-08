import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();

  const handleActivity = () => {
    navigation.navigate('Activity');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleHelp = () => {
    navigation.navigate('Help');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleReview = () => {
    navigation.navigate('Review');
  };

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleAccount = () => {
    navigation.navigate('Acc');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2b189e', '#5d4add', '#a38ef9']}
        style={styles.header}
      >
        <Text style={styles.headerText}>Jungmin Kim</Text>
        <Text style={styles.profileUniversity}>University of Technology Sydney</Text>
      </LinearGradient>

      <View style={styles.body}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
      </View>
      <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Data Analytics</Text>
            <Text style={styles.infoLabel}>Information Technology</Text>
          </View>
        </View>

      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.menuItem} onPress={handleActivity}>
          <Ionicons name="heart-outline" size={24} color="#7B68EE" />
          <Text style={styles.menuText}>Your Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
          <Ionicons name="card-outline" size={24} color="#7B68EE" />
          <Text style={styles.menuText}>Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleHelp}>
          <Ionicons name="pricetag-outline" size={24} color="#7B68EE" />
          <Text style={styles.menuText}>Promotions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleHelp}>
          <Ionicons name="megaphone-outline" size={24} color="#7B68EE" />
          <Text style={styles.menuText}>Helps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
          <Ionicons name="settings-outline" size={24} color="#7B68EE" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FF6347" />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleMain}>
          <Ionicons name="calendar" size={24} color="white" />
          <Text style={styles.navText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleReview}>
          <Ionicons name="book" size={24} color="white" />
          <Text style={styles.navText}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleAccount}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    position: 'relative',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  profileUniversity: {
    fontSize: 16,
    color: 'white',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -50, // Adjust this value to position the profile image correctly
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#f5f5f5',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -30,
  },
  content: {
    padding: 16,
    marginTop: 2, // Adjust this value to create space for the profile image
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 6,
    marginTop: 5,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B68EE',
  },
  infoLabel: {
    fontSize: 16,
    color: 'gray',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  menuText: {
    fontSize: 16,
    color: '#7B68EE',
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#9986FF',
    borderRadius: 30,
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Account;
