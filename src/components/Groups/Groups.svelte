<script>
	import Nav from '../shared/Nav.svelte';
	import Create from '../shared/Create.svelte';
	import { create, chats, notifications, currentRoute } from '../../stores/MainStores';
	import Chats from '../shared/Chats.svelte';
	import Notifications from '../shared/Notifications.svelte';
	import Menu from '../shared/Menu.svelte';
	currentRoute.set('groups');
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
