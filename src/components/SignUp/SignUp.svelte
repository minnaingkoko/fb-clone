<script>
	import { signup, register, user, newsfeed, confirm } from '../../stores/MainStores';
	import { goto } from '$app/navigation';
	import Input from './Input.svelte';
	import Birth from './Birth.svelte';
	import Gender from './Gender.svelte';
	import Terms from './Terms.svelte';
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

	const togglePopup = () => {
		signup.update((value) => !value);
	};
	const handleSubmit = async () => {
		const url = 'http://localhost:5173/api/validate';
		const PostObj = {
			Register: {
				FirstName: $register.FirstName,
				SurName: $register.SurName,
				emOph: $register.emOph,
				Password: $register.Password,
				Bday: $register.Bday,
				Bmonth: $register.Bmonth,
				Byear: $register.Byear,
				Gender: $register.Gender,
				confirm: $confirm
			}
		};
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(PostObj)
		});
		const data = await res.json();
		if (data.status == 302) {
			// user.update((value) => (value = data.body.user));
			// signup.update((value) => !value);
			// newsfeed.update((value) => (value = true));
			// register.set({
			// 	FirstName: '',
			// 	SurName: '',
			// 	emOph: '',
			// 	Password: '',
			// 	Bday: new Date().getDate(),
			// 	Bmonth: months[new Date().getMonth()],
			// 	Byear: new Date().getFullYear(),
			// 	Gender: ''
			// });
			goto('/confirmEmail');
		}
	};
</script>

<!--  -->
<div class="popup-bg" />
<form on:submit|preventDefault={handleSubmit} class="signup-popup">
	<h2 class="intro-text">Sign Up</h2>
	<div class="extra-text">It's quick and easy.</div>
	<button class="close-popup" on:click={togglePopup}>
		<img class="exit-icon" src="/images/exit_menu.webp" alt="exit_menu" />
	</button>
	<div class="mt-[16px] w-[432px] h-[1px] bg-[#dadde1]" />
	<Input />
	<Birth />
	<Gender />
	<Terms />
	<div class="signup-btn">
		<input class="signup-input" type="submit" value="Sign Up" />
	</div>
</form>

<style>
	.popup-bg {
		@apply absolute top-[0] left-[0] z-[10] h-screen w-screen bg-[#ffffff] opacity-80;
	}
	.signup-popup {
		@apply absolute top-[50%] left-[50%] z-[12] flex w-[432px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1),0_8px_16px_0_rgba(0,0,0,0.1)];
	}
	.intro-text {
		@apply mt-[16px] ml-[16px] text-[32px] font-bold;
	}
	.extra-text {
		@apply ml-[16px] mt-[6px] text-[15px] text-[#606770];
	}
	.close-popup {
		@apply absolute top-[16px] right-[16px] h-[24px] w-[24px] cursor-pointer;
	}
	.exit-icon {
		@apply h-[24px] w-[24px] object-cover;
	}
	.signup-btn {
		@apply flex items-center justify-center;
	}
	.signup-input {
		@apply mt-[20px] mb-[24px] flex h-[36px] cursor-pointer items-center justify-center rounded-md bg-[#2c7c1b] pl-[65px] pr-[65px] text-[17px] font-semibold text-[#ffffff] duration-300;
	}
	.signup-input:hover {
		@apply bg-[#1d5a11];
	}
</style>
