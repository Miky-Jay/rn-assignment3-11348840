import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed

const categories = [
  'Exercise', 'Study', 'Code', 'Cook', 'Read', 'Write', 'Meditate', 'Shop'
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hello, Devs</Text>
        <Image source={{ uri: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/woman_1f469.png' }} style={styles.profilePic} />
      </View>
      <CustomTextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search tasks..."
      />
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.title}>Ongoing Tasks</Text>
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
    marginBottom: 20,
  },
  category: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  tasksContainer: {
    flex: 1,
  },
  taskItem: {
    padding: 55,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});

export default App;












