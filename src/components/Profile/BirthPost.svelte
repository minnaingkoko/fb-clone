<script>
	import BirthBtn from './BirthBtn.svelte';
	import { user } from '../../stores/MainStores';
</script>

<div class="birth-post">
	<div class="info-section">
		<img class="profile-img" src="/images/profile.webp" alt="" />
		<div class="info-wrapper">
			<div class="user-name">{$user.FirstName + $user.SurName}</div>
			<div class="birth-date">
				{$user.Bday + ' ' + $user.Bmonth + ' ' + $user.Byear} .
				<img class="clock-icon" src="/images/clock-solid.svg" alt="" />
				<img class="users-solid" src="/images/users-solid.svg" alt="" />
			</div>
		</div>
		<div class="menu">
			<img class="menu-icon" src="/images/three-dot.svg" alt="" />
		</div>
	</div>
	<div class="container">
		<div class="blue-circle">
			<img class="birth-icon" src="/images/birth.webp" alt="" />
		</div>
	</div>
	<div class="birth-info">Born on {$user.Bday + ' ' + $user.Bmonth + ' ' + $user.Byear}</div>
	<div class="break-line" />
	<BirthBtn />
</div>

<style>
	.birth-post {
		@apply w-[500px] rounded-lg bg-[#ffffff] pt-[12px] pb-[8px] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.info-section {
		@apply relative ml-[16px] mr-[16px] flex flex-row;
	}
	.profile-img {
		@apply h-[40px] w-[40px] rounded-[50%] object-cover;
	}
	.info-wrapper {
		@apply ml-[8px] flex flex-col;
	}
	.user-name {
		@apply text-[15px] font-semibold;
	}
	.birth-date {
		@apply text-[13px] text-[#6A6970];
	}
	.clock-icon {
		@apply ml-[2px] mr-[2px] inline-block h-[12px] w-[12px];
	}
	.users-solid {
		@apply ml-[2px] inline-block h-[12px] w-[12px];
	}
	.menu {
		@apply absolute right-[0] flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[50%];
	}
	.menu-icon {
		@apply h-[20px] w-[20px];
	}
	.container {
		@apply mt-[16px] mb-[16px] flex w-[100%] justify-center;
	}
	.blue-circle {
		@apply flex h-[48px] w-[48px] items-center justify-center rounded-[50%] bg-[#1876F2];
	}
	.birth-icon {
		@apply h-[20px] w-[20px] object-cover;
	}
	.birth-info {
		@apply flex w-[100%] cursor-pointer justify-center text-[20px] font-semibold;
	}
	.break-line {
		@apply mt-[32px] ml-[16px] mr-[16px] h-[1px] w-[468px] bg-[#CED0D4];
	}
</style>
