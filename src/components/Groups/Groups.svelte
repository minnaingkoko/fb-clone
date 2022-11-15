<script>
	import Nav from './Nav.svelte';
	import Create from './Create.svelte';
	import { create, chats, notifications } from '../../stores/MainStores';
	import Chats from './Chats.svelte';
	import Notifications from './Notifications.svelte';
	import Menu from './Menu.svelte';
</script>

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