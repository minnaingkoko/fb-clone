<script>
	import Login from '../components/Login/Login.svelte';
	import SignUp from '../components/SignUp/SignUp.svelte';
	import NewsFeed from '../components/NewsFeed/NewsFeed.svelte';
	import { signup, newsfeed } from '../stores/MainStores';
</script>

{#if $newsfeed}
	<NewsFeed />
{:else}
	{#if $signup === true}
		<SignUp />
	{/if}
	<Login />
{/if}
