import { Table } from './table.js';

const table = new Table();

table.getPost();

const form = document.forms.form;

form.addEventListener('submit', function (event) {

	const post = {
		userId: form.elements.userId.value,
		title: form.elements.name.value,
		body: form.elements.body.value
	}

	fetch(`https://jsonplaceholder.typicode.com/posts`, {
		method: post,
		body: JSON.stringify(post),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			table.usersPost.push(post)
			console.log(data)
		});
});