<script lang="ts">
	import { signup, register, user, newsfeed, confirm } from '../../stores/MainStores';
	import { goto } from '$app/navigation';
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
	let confirmCode: number;
	const continueBtn = async () => {
		if ($confirm == confirmCode) {
			const url = 'http://localhost:5173/api/signup';
			const PostObj = {
				Register: {
					FirstName: $register.FirstName,
					SurName: $register.SurName,
					emOph: $register.emOph,
					Password: $register.Password,
					Bday: $register.Bday,
					Bmonth: $register.Bmonth,
					Byear: $register.Byear,
					Gender: $register.Gender
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
			if (data.body) {
				user.update((value) => (value = data.body.user));
				signup.update((value) => (value = false));
				newsfeed.update((value) => (value = true));
				register.set({
					FirstName: '',
					SurName: '',
					emOph: '',
					Password: '',
					Bday: new Date().getDate(),
					Bmonth: months[new Date().getMonth()],
					Byear: new Date().getFullYear(),
					Gender: ''
				});
				goto('/');
			}
		} else {
			alert('try again');
		}
	};
</script>

<div class="check-email">
	<div class="container">
		<div class="heading">Enter the code from your email</div>
		<div class="break-line" />
		<div class="text">
			Let us know that this email address belongs to you. Enter the code from the email sent to
			minnaingkoko2001@gmail.com.
		</div>
		<div class="code">
			<div class="text-alt">FB-</div>
			<input bind:value={confirmCode} class="code-input" type="text" maxlength="5" />
		</div>
		<div class="text-alter">Send Email Again</div>
		<div class="break-line" />
		<div class="btns">
			<div class="update">Update Contact Info</div>
			<button on:click={continueBtn} class="continue">Continue</button>
		</div>
	</div>
</div>

<style>
	.check-email {
		@apply flex w-[100%] justify-center;
	}
	.container {
		@apply w-[500px] pb-[20px] pt-[18px] bg-[#ffffff] rounded-lg mt-[40px];
	}
	.heading {
		@apply text-[20px] font-semibold ml-[16px];
	}
	.break-line {
		@apply w-[500px] h-[1px] bg-[#D9D9D9] mt-[18px];
	}
	.text {
		@apply text-[15px] ml-[16px] mr-[16px] mt-[16px] text-[#5E686F];
	}
	.code {
		@apply cursor-text flex flex-row items-center w-[137px] h-[58px] border border-[#CECFD1] rounded-lg mt-[20px] ml-[16px];
	}
	.text-alt {
		@apply text-[15px] text-[#8D949E] ml-[12px];
	}
	.code-input {
		@apply text-[#8D949E] w-[83px] ml-[6px] mr-[12px];
	}
	.text-alter {
		@apply text-[#466FA4] text-[15px] ml-[16px] mt-[10px] cursor-pointer duration-300;
	}
	.text-alter:hover {
		@apply underline;
	}
	.break-line {
		@apply w-[500px] h-[1px] bg-[#D9D9D9] mt-[20px];
	}
	.btns {
		@apply flex w-[100%] justify-end mt-[20px];
	}
	.update {
		@apply w-[159px] h-[36px] text-[15px] font-semibold flex justify-center items-center bg-[#EBEDF0] cursor-pointer rounded-lg;
	}
	.continue {
		@apply w-[141px] h-[36px] text-[15px] font-semibold flex justify-center items-center bg-[#EBEDF0] opacity-50 cursor-pointer rounded-lg ml-[8px] mr-[16px];
	}
</style>
