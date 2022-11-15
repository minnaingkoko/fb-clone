<script>
	import RightNav from './RightNav.svelte';
</script>

<nav class="nav-bar">
	<div class="mid-nav">
		<a href="/" class="home-route">
			<img class="home-icon" src="/images/home-alt.svg" alt="home" />
		</a>
		<a href="/friends" class="other-route">
			<img class="other-icon" src="/images/friend.svg" alt="friend" />
			<div class="blue-line" />
		</a>
		<a href="/groups" class="other-route">
			<img class="other-icon" src="/images/group-alt.svg" alt="group" />
		</a>
	</div>
	<div class="left-nav">
		<div class="logo">
			<img class="logo-img" src="/images/logo.webp" alt="logo" />
		</div>
		<div class="search">
			<img class="search-icon" src="/images/search.svg" alt="search" />
			<input class="search-input" type="text" placeholder="Search Facebook" />
		</div>
	</div>
	<RightNav />
</nav>

<style>
	.nav-bar {
		@apply fixed z-[10] flex h-[56px] w-screen flex-row items-center justify-between bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.mid-nav {
		@apply absolute left-[50%] flex translate-x-[-50%] flex-row items-center gap-[8px];
	}
	.home-route {
		@apply relative flex h-[56px] w-[112px] cursor-pointer items-center justify-center rounded-lg duration-300;
	}
	.home-icon {
		@apply h-[28px] w-[28px] object-cover;
	}
	.blue-line {
		@apply absolute bottom-[0px] h-[4px] w-[112px] bg-[#1b74e4];
	}
	.other-route {
		@apply flex h-[48px] w-[112px] cursor-pointer items-center justify-center rounded-lg duration-300;
	}
	.other-route:hover {
		@apply bg-[#f0f2f5];
	}
	.other-icon {
		@apply h-[28px] w-[28px] object-cover;
	}
	.left-nav {
		@apply flex flex-row;
	}
	.logo {
		@apply ml-[16px] h-[40px] w-[40px] cursor-pointer;
	}
	.logo-img {
		@apply h-[40px] w-[40px] rounded-[50%] object-cover;
	}
	.search {
		@apply relative ml-[12px] flex h-[40px] w-[240px] flex-row items-center rounded-[50px] bg-[#f0f2f5];
	}
	.search-icon {
		@apply ml-[12px] h-[16px] w-[16px] object-cover;
	}
	.search-input {
		@apply ml-[8px] mr-[12px] w-[192px] border-none bg-[#f0f2f5] text-[15px] placeholder-[#606770] outline-none;
	}
</style>
