<script>
	import { currentRoute } from '../../stores/MainStores';
	import RightNav from './RightNav.svelte';
</script>

<nav class="nav-bar">
	<div class="mid-nav">
		<a href="/" class={$currentRoute === 'home' ? "current-route" : 'other-route'}>
			<img class="nav-icon" src={$currentRoute === 'home' ? "/images/home.svg" : "/images/home-alt.svg"} alt="home" />
			<div class={$currentRoute === 'home' ? "blue-line" : 'no-line'} />
		</a>
		<a href="/friends" class={$currentRoute === 'friends' ? "current-route" : 'other-route'}>
			<img class="nav-icon" src={$currentRoute === 'friends' ? "/images/friend.svg" : "/images/friend-alt.svg"} alt="friend" />
			<div class={$currentRoute === 'friends' ? "blue-line" : 'no-line'} />
		</a>
		<a href="/groups" class={$currentRoute === 'groups' ? "current-route" : 'other-route'}>
			<img class="nav-icon" src={$currentRoute === 'groups' ? "/images/group.svg" : "/images/group-alt.svg"} alt="group" />
			<div class={$currentRoute === 'groups' ? "blue-line" : 'no-line'} />
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
	.current-route {
		@apply relative flex h-[56px] w-[112px] cursor-pointer items-center justify-center rounded-lg duration-300;
	}
	.nav-icon {
		@apply h-[28px] w-[28px] object-cover;
	}
	.blue-line {
		@apply absolute bottom-[0px] h-[4px] w-[112px] bg-[#1b74e4];
	}
	.no-line {
		@apply hidden;
	}
	.other-route {
		@apply flex h-[48px] w-[112px] cursor-pointer items-center justify-center rounded-lg duration-300;
	}
	.other-route:hover {
		@apply bg-[#f0f2f5];
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
