<script>
	import Nav from '../shared/Nav.svelte'
	import LeftContent from './LeftContent.svelte';
	import MidContent from './MidContent.svelte';
	import RightContent from './RightContent.svelte';
	import Create from '../shared/Create.svelte';
	import { create, chats, notifications, currentRoute } from '../../stores/MainStores';
	import Chats from '../shared/Chats.svelte';
	import Notifications from '../shared/Notifications.svelte';
	import Menu from '../shared/Menu.svelte';
	currentRoute.set('home');
</script>

<div>
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

	<div class="newsfeed">
		<div class="message">
			<div class="message-icon" />
		</div>
		<LeftContent />
		<MidContent />
		<RightContent />
	</div>
</div>

<style>
	.newsfeed {
		@apply relative top-[64px] flex flex-row;
	}
	.message {
		@apply fixed right-[24px] bottom-[24px] z-[10] flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[50%] bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] duration-300;
	}
	.message:hover {
		@apply bg-[#f0f2f5];
	}
	.message-icon {
		background-position: -42px -165px;
		@apply inline-block h-[20px] w-[20px] bg-[url('/images/Util-img.webp')] bg-auto bg-no-repeat;
	}
</style>
