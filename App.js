import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// import Todo from './Todo';

// TODO APP
export default function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [selectedTodo, setSelectedTodo] = useState(null);

	const handleAddTodo = () => {
		const newTodo = {
			id: Date.now(), // using current timestamp as the ID
			text: todo,
		};
		setTodos([...todos, newTodo]);
		setTodo('');
	};

	const handleDeleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
		setSelectedTodo(null);
	};

	const handleSelectedTodo = (todo) => {
		if (selectedTodo) {
			setSelectedTodo(null);
			return;
		}
		setSelectedTodo(todo);
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Add Todo"
					value={todo}
					onChangeText={(text) => setTodo(text)}
				/>
				<TouchableOpacity
					onPress={handleAddTodo}
					style={styles.addButton}>
					<Text style={styles.addButtonText}>Add</Text>
				</TouchableOpacity>
			</View>

			{todos.map((todo) => (
				<TouchableOpacity
					key={todo.id}
					onPress={() => handleSelectedTodo(todo)}
					style={styles.todoContainer}>
					<Text style={styles.todoText}>{todo.text}</Text>

					{selectedTodo && selectedTodo.id === todo.id && (
						<TouchableOpacity
							onPress={() => handleDeleteTodo(todo.id)}
							style={styles.deleteButton}>
							<Text style={styles.deleteButtonText}>Delete</Text>
						</TouchableOpacity>
					)}
				</TouchableOpacity>
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
		justifyContent: 'flex-start',
		paddingTop: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '90%',
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		width: '70%',
		borderRadius: 5,
		fontSize: 18,
		backgroundColor: '#fff',
	},
	addButton: {
		backgroundColor: '#008cff',
		padding: 10,
		borderRadius: 5,
	},
	addButtonText: {
		color: '#fff',
		fontSize: 18,
	},
	todoContainer: {
		backgroundColor: '#f2f2f2',
		padding: 10,
		width: '90%',
		borderRadius: 5,
		marginBottom: 10,
	},
	todoText: {
		fontSize: 18,
	},
	deleteButton: {
		backgroundColor: '#f00',
		padding: 10,
		borderRadius: 5,
	},
	deleteButtonText: {
		color: '#fff',
		fontSize: 18,
	},
});
