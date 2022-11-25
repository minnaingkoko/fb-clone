<script>
	import ButtonAlt from './ButtonAlt.svelte';
</script>

<div class="create">
	<div class="heading">Create</div>
	<ButtonAlt
		pos="0px -440px"
		link="#"
		IconUrl="/images/util1.png"
		BtnHeading="Post"
		BtnText={`<p>Share a post on Newsfeed.</p>`}
		mt="4"
		ml="8"
		mr="8"
		mb="0"
	/>
	<ButtonAlt
		pos="0px -614px"
		link="#"
		IconUrl="/images/util2.png"
		BtnHeading="Story"
		BtnText={`<p>Share a photo or write something.</p>`}
		mt="0"
		ml="8"
		mr="8"
		mb="0"
	/>
	<ButtonAlt
		pos="0px -209px"
		link="#"
		IconUrl="/images/util1.png"
		BtnHeading="Room"
		BtnText={`<p>Video chat with anyone, on or off Facebook,</br>without time limits.</p>`}
		mt="0"
		ml="8"
		mr="8"
		mb="0"
	/>
	<div class="break-line" />
	<ButtonAlt
		pos="0px -188px"
		link="#"
		IconUrl="/images/util1.png"
		BtnHeading="Page"
		BtnText={`<p>Connet and share with customers or fans.</p>`}
		mt="0"
		ml="8"
		mr="8"
		mb="0"
	/>
	<ButtonAlt
		pos="0px -713px"
		link="#"
		IconUrl="/images/util1.png"
		BtnHeading="Ad"
		BtnText={`<p>Advertise your business, brand or  organisation.</p>`}
		mt="0"
		ml="8"
		mr="8"
		mb="0"
	/>
	<ButtonAlt
		pos="0px -215px"
		link="#"
		IconUrl="/images/util2.png"
		BtnHeading="Group"
		BtnText={`<p>Connect with people who share your interests.</p>`}
		mt="0"
		ml="8"
		mr="8"
		mb="0"
	/>
	<ButtonAlt
		pos="0px -251px"
		link="#"
		IconUrl="/images/util1.png"
		BtnHeading="Event"
		BtnText={`<p>Bring people together with a public or private</br>event.</p>`}
		mt="0"
		ml="8"
		mr="8"
		mb="0"
	/>
	<ButtonAlt
		pos="0px -593px"
		link="#"
		IconUrl="/images/util2.png"
		BtnHeading="Marketplace Listing"
		BtnText={`<p>Sell items to people in your community.</p>`}
		mt="0"
		ml="8"
		mr="8"
		mb="0"
	/>
</div>

<style>
	.create {
		@apply w-[360px] pt-[20px] pb-[8px] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20];
	}
	.heading {
		@apply text-[24px] font-bold ml-[16px];
	}
	.break-line {
		@apply w-[328px] h-[1px] bg-[#E5E6EB] ml-[16px] mt-[8px] mb-[8px];
	}
</style>
