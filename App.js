import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// TODO APP
// take input from user
// add button adds the task in a list
// display the tasks

export default function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const handleAddTodo = () => {
		setTodos([...todos, todo]);
		setTodo('');
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Add Todo"
				value={todo}
				onChangeText={(text) => setTodo(text)}
			/>
			<TouchableOpacity onPress={handleAddTodo}>
				<Text>Add</Text>
			</TouchableOpacity>

			{todos.map((todo, index) => (
				<Text key={index}>{todo}</Text>
			))}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
