import { writable } from 'svelte/store';
let months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const signup = writable(false);

export const newsfeed = writable(false);

// have to make this store to local data
export const register = writable({
	FirstName: '',
	SurName: '',
	emOph: '',
	Password: '',
	Bday: new Date().getDate(),
	Bmonth: months[new Date().getMonth()],
	Byear: new Date().getFullYear(),
	Gender: ''
});

// have to make this store to local data
export const login = writable({
	emOph: '',
	Password: ''
});

export const user = writable({
	FirstName: '',
	SurName: '',
	emOph: '',
	Bday: new Date().getDate(),
	Bmonth: months[new Date().getMonth()],
	Byear: new Date().getFullYear(),
	Gender: ''
});

export const confirm = writable(Math.floor(10000 + Math.random() * 90000));

export const create = writable(false);

export const chats = writable(false);

export const notifications = writable(false);

export const menu = writable(false);

export const setting = writable(false);

export const help = writable(false);

export const display = writable(false);

export const keyboard = writable(false);
