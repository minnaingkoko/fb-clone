<script>
	import { create, chats, notifications, menu, setting, help, display, keyboard } from '../../stores/MainStores';

	const createBtn = () => {
		create.update((value) => !value);
		chats.update((value) => value = false);
		notifications.update((value) => value = false);
		menu.update((value) => value = false);
		setting.update((value) => value = false);
        help.update((value) => value = false);
        display.update((value) => value = false);
	}
	const chatsBtn = () => {
		chats.update((value) => !value);
		create.update((value) => value = false);
		notifications.update((value) => value = false);
		menu.update((value) => value = false);
		setting.update((value) => value = false);
        help.update((value) => value = false);
        display.update((value) => value = false);
	}
	const notiBtn = () => {
		notifications.update((value) => !value);
		create.update((value) => value = false);
		chats.update((value) => value = false);
		menu.update((value) => value = false);
		setting.update((value) => value = false);
        help.update((value) => value = false);
        display.update((value) => value = false);
	}
	const menuBtn = () => {
		menu.update((value) => !value);
		setting.update((value) => value = false);
        help.update((value) => value = false);
        display.update((value) => value = false);
		create.update((value) => value = false);
		chats.update((value) => value = false);
		notifications.update((value) => value = false);
	}
</script>

<div class="right-nav">
	<a href="/friends" class="find-friends">Find Friends</a>
	<button on:click={createBtn} class="plus">
		<img class="plus-icon" src="/images/plus.svg" alt="plus" />
	</button>
	<button on:click={chatsBtn} class="messenger">
		<img class="messenger-icon" src="/images/messenger.svg" alt="messenger" />
	</button>
	<button on:click={notiBtn} class="notification">
		<img class="notification-icon" src="/images/notification.svg" alt="notification" />
	</button>
	<button on:click={menuBtn} class="profile">
		<img class="profile-icon" src="/images/profile.webp" alt="Profile" />
	</button>
</div>

<style>
	.right-nav {
		@apply mr-[16px] flex flex-row items-center;
	}
	.find-friends {
		@apply mr-[8px] flex h-[36px] cursor-pointer items-center justify-center rounded-[50px] bg-[#f0f2f5] pl-[10px] pr-[10px] font-semibold duration-300;
	}
	.find-friends:hover {
		@apply bg-[#e0e2e7];
	}
	.plus,
	.messenger,
	.notification {
		@apply mr-[8px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50%] bg-[#f0f2f5] duration-300;
	}
	.plus:hover,
	.messenger:hover,
	.notification:hover {
		@apply bg-[#e0e2e7];
	}
	.plus-icon,
	.messenger-icon,
	.notification-icon {
		@apply h-[20px] w-[20px] object-cover;
	}
	.profile {
		@apply mr-[8px] h-[40px] w-[40px] cursor-pointer rounded-[50%] duration-300;
	}
	.profile:hover {
		@apply brightness-90;
	}
	.profile-icon {
		@apply h-[40px] w-[40px] rounded-[50%] object-cover;
	}
</style>
