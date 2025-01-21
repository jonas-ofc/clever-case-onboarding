import axios from 'axios';
import type { ApiUser, User } from '../interfaces/interfaces';

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await axios.get<ApiUser[]>('https://jsonplaceholder.typicode.com/users');
        const users = response.data.map((user: ApiUser) => ({
            email: user.email,
            password: 'password'
        }));

        const betinnaExists = users.some(user => user.email === 'betinna.knudsen@virksomhed.dk');

        if (!betinnaExists) {
            users.push({
                email: 'betinna.knudsen@virksomhed.dk',
                password: 'password123'
            });
        }
        
        return users;

    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}