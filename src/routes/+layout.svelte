<script>
	import '../app.css';
	import { newsfeed, user } from '../stores/MainStores';
	import { page } from '$app/stores';

	const getUser = async () => {
		const url = 'http://localhost:5173/api/getUser';
		const PostObj = {
			userId: $page.data.user.userId
		};
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(PostObj)
		});
		const data = await res.json();
		if (data.body.user) {
			user.update((value) => (value = data.body.user));
		}
	}

	if($page.data.user){
		getUser();
		newsfeed.update((value) => (value = value = true));
	}
	else{
		newsfeed.update((value) => (value = value = false));
		user.set({
			FirstName: '',
			SurName: '',
			emOph: '',
			Bday: 0,
			Bmonth: '',
			Byear: 0,
			Gender: ''
		});
	}
</script>

<slot />
