import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed

// Import images
const studyIcon = require('./assets/study.png');
const codeIcon = require('./assets/code.png');
const cookIcon = require('./assets/cook.png');
const readIcon = require('./assets/read.png');
const writeIcon = require('./assets/write.png');
const meditateIcon = require('./assets/meditate.png');
const shopIcon = require('./assets/shop.png');

const categories = [
  { name: 'Study', icon: studyIcon },
  { name: 'Code', icon: codeIcon },
  { name: 'Cook', icon: cookIcon },
  { name: 'Read', icon: readIcon },
  { name: 'Write', icon: writeIcon },
  { name: 'Meditate', icon: meditateIcon },
  { name: 'Shop', icon: shopIcon }
];

const tasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Study React Native' },
  { id: '3', title: 'Complete coding challenge' },
  { id: '4', title: 'Prepare lunch' },
  { id: '5', title: 'Read a book' },
  { id: '6', title: 'Write a blog post' },
  { id: '7', title: 'Evening meditation' },
  { id: '8', title: 'Grocery shopping' },
  { id: '9', title: 'Gym workout' },
  { id: '10', title: 'Finish project report' },
  { id: '11', title: 'Debug app' },
  { id: '12', title: 'Bake cookies' },
  { id: '13', title: 'Research new topic' },
  { id: '14', title: 'Practice guitar' },
  { id: '15', title: 'Plan next week' }
];

const App = () => {
  const [search, setSearch] = useState('');

  const CustomTextInput = ({ value, onChangeText, placeholder }) => (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#ccc" style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );

  const TaskItem = ({ title }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{title}</Text>
    </View>
  );

  const renderCategory = ({ item }) => (
    <View style={styles.category}>
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Hello, Devs</Text>
          <Text style={styles.smallText}>15 tasks today</Text>
        </View>
        <Image source={{ uri: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/woman_1f469.png' }} style={styles.profilePic} />
      </View>
      <CustomTextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search tasks..."
      />
      <Text style={styles.title}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        style={styles.categoriesContainer}
      />
      <Text style={[styles.title, { marginTop: 0 }]}>Ongoing Tasks</Text>
      <ScrollView style={styles.tasksContainer}>
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF0F5', // Lilac color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24, // Make it a bit bigger
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12, // Smaller text size for the task count
    color: '#666',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingRight: 10, // Add paddingRight for the menu icon
  },
  searchIcon: {
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  menuButton: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 10, 
  },
  category: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    marginRight: 20,
    alignItems: 'center',
    width: 250, // Adjust width
    height: 400, // Adjust height
    justifyContent: 'center',
  },
  categoryIcon: {
    width: 250,
    height: 350,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
  },
  tasksContainer: {
    flex: 1,
  },
  taskItem: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});

export default App;

