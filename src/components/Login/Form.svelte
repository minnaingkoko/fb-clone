<script>
	import { signup, login, user, newsfeed } from '../../stores/MainStores';
	const togglePopup = () => {
		signup.update((value) => !value);
	};
	const handleSubmit = async () => {
		const url = 'http://localhost:5173/api/login';
		const PostObj = {
			Login: {
				emOph: $login.emOph,
				Password: $login.Password
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
		if (data.body.user) {
			user.set(data.body.user);
			newsfeed.set(true);
			login.set({
				emOph: '',
				Password: ''
			});
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="login-form">
	<input
		bind:value={$login.emOph}
		class="login-input"
		type="text"
		placeholder="Email address or phone number"
	/>
	<input bind:value={$login.Password} class="login-input" type="password" placeholder="Password" />
	<input class="login-submit" type="submit" value="Log In" />
	<div class="forget-pwd">Forgotten password?</div>
	<div class="break-line" />
	<button on:click={togglePopup} class="create-new-acc">Create New Account</button>
</form>

<style>
	.login-form {
		@apply flex w-[396px] flex-col items-center rounded-lg bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1),0_8px_16px_0_rgba(0,0,0,0.1)];
	}
	.login-input {
		@apply mt-[16px] h-[50px] w-[364px] rounded-md border border-solid border-[#dddfe2] pl-[16px] text-[17px] placeholder-[#90949c] outline-none;
	}
	.login-input:focus {
		@apply shadow-[0_0_0_2px_rgba(231,243,255,1)] border-[#1877f2] placeholder-[#cac4c9] caret-[#1877f2];
	}
	.login-submit {
		@apply mt-[12px] flex h-[48px] w-[364px] cursor-pointer items-center justify-center rounded-md bg-[#1671e7] text-[20px] font-semibold text-[#ffffff] duration-300;
	}
	.login-submit:hover {
		@apply bg-[#156ada];
	}
	.forget-pwd {
		@apply mt-[16px] cursor-pointer text-[14px] font-medium text-[#1671e7] duration-300;
	}
	.forget-pwd:hover {
		@apply underline decoration-[#1671e7];
	}
	.break-line {
		@apply mt-[20px] w-[364px] h-[1px] bg-[#f0f2f5];
	}
	.create-new-acc {
		@apply mb-[24px] mt-[20px] flex h-[48px] cursor-pointer items-center justify-center rounded-md bg-[#2c7c1b] pl-[21px] pr-[21px] text-[17px] font-semibold text-[#ffffff] duration-300;
	}
	.create-new-acc:hover {
		@apply bg-[#1d5a11];
	}
</style>
