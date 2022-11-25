<script>
	import { register } from '../../stores/MainStores';
</script>

<div class="input-sec">
	<input
		class="name-input"
		type="text"
		name="first-name"
		placeholder="First Name"
		bind:value={$register.FirstName}
	/>
	<input
		class="name-input"
		type="text"
		name="surname"
		placeholder="SurName"
		bind:value={$register.SurName}
	/>
</div>
<div class="other-input-sec">
	<input
		class="other-input"
		type="text"
		name="emOph"
		placeholder="Mobile number or email address"
		bind:value={$register.emOph}
	/>
</div>
<div class="other-input-sec">
	<input
		class="other-input"
		type="password"
		name="password"
		placeholder="New Password"
		bind:value={$register.Password}
	/>
</div>

<style>
	.input-sec {
		@apply flex flex-row justify-center gap-[16px];
	}
	.name-input {
		@apply mt-[16px] h-[38px] w-[192px] rounded-md border-[1px] border-solid border-[#ccd0d5] bg-[#f5f6f7] pl-[8px] text-[15px] placeholder-[#8d949e] outline-none;
	}
	.other-input-sec {
		@apply flex justify-center;
	}
	.other-input {
		@apply mt-[10px] h-[38px] w-[400px] rounded-md border-[1px] border-solid border-[#ccd0d5] bg-[#f5f6f7] pl-[8px] text-[15px] placeholder-[#8d949e] outline-none;
	}
</style>
