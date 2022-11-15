<script>
	import Button from './Button.svelte';
	import { user } from '../../stores/MainStores';
	let slide = false;
	const toggleSlide = () => {
		slide = !slide;
	}
</script>

<div class="left-content">
	<Button
		link="/profile"
		IconUrl="/images/profile.webp"
		BtnText={$user.FirstName + $user.SurName}
		mt="8"
		ml="8"
		mr="0"
		mb="0"
		br="50"
		slide={true}
	/>
	<Button
		link="/friends"
		IconUrl="/images/friends.webp"
		BtnText="Find friends"
		mt="0"
		ml="8"
		mr="0"
		mb="0"
		br="0"
		slide={true}
	/>
	<Button link="#" IconUrl="/images/logo.webp" BtnText="Welcome" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="/groups" IconUrl="/images/groups.webp" BtnText="Groups" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="#" IconUrl="/images/market.webp" BtnText="Marketplace" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="/watch" IconUrl="/images/watch.webp" BtnText="Watch" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="#" IconUrl="/images/memories.webp" BtnText="Memories" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="#" IconUrl="/images/saved.webp" BtnText="Saved" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="#" IconUrl="/images/pages.webp" BtnText="Pages" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="#" IconUrl="/images/event.webp" BtnText="Events" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="#" IconUrl="/images/recent.webp" BtnText="Most recent" mt="0" ml="8" mr="0" mb="0" br="0" slide={true} />
	<Button link="#" IconUrl="/images/favourite.webp" BtnText="Favourites" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<!-- break -->
	<Button link="#" IconUrl="/images/ad_centre.webp" BtnText="Ad Centre" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/ads_manager.webp" BtnText="Ads Manager" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/blood.webp" BtnText="Blood Donations" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/climate.webp" BtnText="Climate Science Centre" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/covid.webp" BtnText="Covid-19 Information Centre" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/crisis.webp" BtnText="Crisis Response" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/digital.webp" BtnText="Digital Collectibles" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/emotional.webp" BtnText="Emotional Health" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/pay.webp" BtnText="Facebook Pay" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/fundraiser.webp" BtnText="Fundraisers" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/gaming.webp" BtnText="Gaming video" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/live.webp" BtnText="Live video" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/messenger.webp" BtnText="Messenger" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/messenger_kid.webp" BtnText="Messenger Kids" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/play.webp" BtnText="Play games" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	<Button link="#" IconUrl="/images/recent_ad.webp" BtnText="Recent ad activity" mt="0" ml="8" mr="0" mb="0" br="0" slide={slide} />
	
	<button on:click={toggleSlide} class="custom-button">
		{#if slide}
			<div class="profile">
				<img class="profile-img" src="/images/see_less.svg" alt="icon" />
			</div>
			<div class="btn-text">See less</div>
		{:else}
			<div class="profile">
				<img class="profile-img" src="/images/see_more.svg" alt="icon" />
			</div>
			<div class="btn-text">See more</div>
		{/if}
	</button>
	<div class="extra">
		<div class="extra-text">
			Privacy · Terms · Advertising · Ad Choices ·<br />Cookies · More · Meta © 2022
		</div>
	</div>
</div>

<style>
	.left-content {
		@apply fixed left-[0px] h-[calc(100vh_-_64px)] w-[324px] overflow-y-hidden;
	}
	.left-content:hover {
		@apply overflow-y-auto;
	}
	.custom-button {
		@apply ml-[8px] mb-[8px] flex h-[44px] w-[296px] cursor-pointer flex-row items-center rounded-lg duration-300;
	}
	.custom-button:hover {
		@apply bg-[#e0e2e7];
	}
	.profile {
		@apply ml-[8px] flex h-[28px] w-[28px] items-center justify-center rounded-[50%] bg-[#e4e6eb];
	}
	.profile-img {
		@apply h-[16px] w-[16px] object-cover;
	}
	.btn-text {
		@apply ml-[12px] text-[15px] font-medium;
	}
	.extra {
		@apply ml-[8px] flex h-[57px] w-[296px] items-center;
	}
	.extra-text {
		@apply ml-[8px] text-[13px] font-semibold;
	}
</style>
