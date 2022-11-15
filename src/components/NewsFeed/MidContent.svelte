<script>
	import CreatePost from './CreatePost.svelte';
	import Stories from './Stories.svelte';
	import NoPost from './NoPost.svelte';
</script>

<div class="mid-content">
	<Stories />
	<div class="remember-pwd">
		<img class="logo" src="/images/logo.webp" alt="" />
		<img class="char" src="/images/char.webp" alt="" />
		<img class="exit-menu" src="/images/exit_menu.webp" alt="" />
		<div class="remember-text">Remember password</div>
		<div class="extra-text">
			Next time you log in on this browser, just click your profile picture instead of typing a
			password.
		</div>
		<div class="extra-btns">
			<div class="ok-btn">Ok</div>
			<div class="notnow-btn">Not now</div>
		</div>
	</div>
	<CreatePost />
	<NoPost />
</div>

<style>
	.mid-content {
		@apply absolute left-[50%] flex w-[calc(100vw_-_700px)] translate-x-[-50%] flex-col items-center overflow-y-auto;
	}
	.remember-pwd {
		@apply relative mt-[16px] w-[500px] rounded-lg bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.logo {
		@apply ml-[16px] mt-[24px] h-[32px] w-[32px] cursor-pointer object-cover;
	}
	.char {
		@apply absolute top-[24px] left-[50%] h-[60px] w-[60px] translate-x-[-50%] object-cover;
	}
	.exit-menu {
		@apply absolute right-[16px] top-[12px] h-[20px] w-[20px] cursor-pointer;
	}
	.remember-text {
		@apply mt-[44px] ml-[16px] mr-[16px] text-[20px] font-semibold;
	}
	.extra-text {
		@apply mt-[4px] ml-[16px] mr-[16px] text-[17px];
	}
	.extra-btns {
		@apply mt-[12px] mb-[12px] ml-[16px] mr-[16px] flex flex-row gap-[8px];
	}
	.ok-btn {
		@apply flex h-[36px] w-[230px] cursor-pointer items-center justify-center rounded-md bg-[#E7F3FF] text-[15px] font-semibold text-[#3472D2];
	}
	.notnow-btn {
		@apply flex h-[36px] w-[230px] cursor-pointer items-center justify-center rounded-md bg-[#E5E6EB] text-[15px] font-semibold;
	}
</style>
