# rn-assignment3-11348840

Task Management App.
Overview.
This Task Management App is designed to help users organize and manage their daily tasks efficiently. The app features categories for tasks, a search bar for easy task filtering, and a section for ongoing tasks. It uses React Native for the front end and includes icons for different task categories.

Components
1. App
The main component that encompasses the entire application layout. It contains the header, search bar, categories list, and the ongoing tasks section.

2. CustomTextInput
A custom search input component that includes a search icon and a menu button. It allows users to enter text to filter or search tasks.

Props:
`value`: The current text input value.
`onChangeText`: A function to handle text input changes.
`placeholder`: The placeholder text for the input field.

3. TaskItem
A component that represents an individual task in the ongoing tasks list. It displays the title of the task.

Props:
`title`: The title of the task to be displayed.
4. Category
A component that represents a task category, displaying an icon and the category name.

Props:
`item`: An object containing the category name and icon.
Assets
The app uses several icons representing different categories of tasks. These icons are stored in the assets directory and imported into the app.

Styles
The styles object contains various styles used throughout the app, including layout, text, and component-specific styles.

Usage
Header: Displays a greeting message and the user's profile picture. It also shows the number of tasks for the day.
Search Bar: Allows users to search for specific tasks.
Categories: A horizontal list of task categories with icons.
Ongoing Tasks: A scrollable list of tasks that are currently being worked on.
Running the App
To run the app, follow these steps:

Ensure you have Node.js and npm installed.
Install Expo CLI globally using npm install -g expo-cli.
Clone the repository and navigate to the project directory.
Run npm install to install dependencies.
Start the app with expo start.