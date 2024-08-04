import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerText}>Configurações</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
         source={require('./assets/WhatsApp Image 2024-08-04 at 12.30.11.jpeg')} // URL da imagem do perfil
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Thiago Garcia Talarico</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="information-circle-outline" size={20} color="#373737" />
          <Text style={styles.optionText}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="user-o" size={20} color="#373737" />
          <Text style={styles.optionText}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="handshake-o" size={20} color="#373737" />
          <Text style={styles.optionText}>Torne-se Patrocinador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Entypo name="cog" size={20} color="#373737" />
          <Text style={styles.optionText}>Preferências</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.adContainer}>
        <Text style={styles.adText}>Anúncio</Text>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity>
          <Ionicons name="paw-outline" size={24} color="#373737" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#373737" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="#373737" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="star-outline" size={24} color="#373737" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="#373737" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C2F5C',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  profileContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileName: {
    marginTop: 10,
    fontSize: 16,
    color: '#7D4CDB',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#373737',
  },
  adContainer: {
    margin: 20,
    height: 100,
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adText: {
    fontSize: 18,
    color: '#9E9E9E',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E1E1E1',
    backgroundColor: '#FFFFFF',
  },
});

export default SettingsScreen;
