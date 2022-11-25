<script>
	import Nav from '../shared/Nav.svelte';
	import ProfileInfo from './ProfileInfo.svelte';
	import InfoWrapper from './InfoWrapper.svelte';
	import PostWrapper from './PostWrapper.svelte';
	import { create, chats, notifications, currentRoute } from '../../stores/MainStores';
	import Chats from '../shared/Chats.svelte';
	import Notifications from '../shared/Notifications.svelte';
	import Menu from '../shared/Menu.svelte';
	import Create from '../shared/Create.svelte';
	currentRoute.set('profile');
</script>

<div>
	<div class="profile">
		<div class="util-img" />
	</div>
	<Nav />
	{#if $create}
		<Create />
	{/if}
	{#if $chats}
		<Chats />
	{/if}
	{#if $notifications}
		<Notifications />
	{/if}

	<Menu />
	<div class="profile-section">
		<div class="profile-wrap">
			<div class="side-bar" />
			<div class="background-cover">
				<div class="background" />
				<div class="edit-cover">
					<div class="edit-icon" />
					<div class="edit-text">Edit cover photo</div>
				</div>
			</div>
			<div class="side-bar" />
		</div>
		<ProfileInfo />
	</div>
	<div class="relative flex w-[100%] shrink-0 flex-row items-stretch justify-center gap-[16px]">
		<InfoWrapper />
		<PostWrapper />
	</div>
</div>

<style>
	.profile {
		@apply fixed right-[24px] bottom-[24px] z-[10] flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[50%] bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] duration-300;
	}
	.profile:hover {
		@apply bg-[#f0f2f5];
	}
	.util-img {
		background-position: -42px -165px;
		@apply inline-block h-[20px] w-[20px] bg-[url('/images/Util-img.webp')] bg-auto bg-no-repeat;
	}
	.profile-section {
		@apply relative w-[100%] bg-[#ffffff];
	}
	.profile-wrap {
		@apply flex flex-row;
	}
	.side-bar {
		@apply h-[348px] w-[calc((100%_-_940px)_/_2)];
	}
	.background-cover {
		@apply relative h-[348px] w-[940px] rounded-[0_0_8px_8px];
	}
	.background {
		@apply h-[348px] w-[940px] rounded-[0_0_8px_8px] bg-[#D9D9D9];
	}
	.edit-cover {
		@apply flex-row absolute right-[38px] bottom-[16px] flex h-[36px] cursor-pointer items-center gap-[6px] rounded-md bg-[#ffffff] pl-[12px] pr-[12px];
	}
	.edit-icon {
		@apply inline-block h-[16px] w-[16px] bg-[url('/images/camera.webp')] bg-auto bg-[left_-437px] bg-no-repeat;
	}
	.edit-text {
		@apply text-[15px] font-semibold;
	}
</style>
