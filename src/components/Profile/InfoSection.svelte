<script>
	import GetStarted from './GetStarted.svelte';
</script>

<GetStarted />
<div class="info-section">
	<div class="intro-text">Intro</div>
	<div class="info-btn">
		<div class="info-text">Edit bio</div>
	</div>
	<div class="info-btn">
		<div class="info-text">Edit detail</div>
	</div>
	<div class="info-btn">
		<div class="info-text">Edit hobbies</div>
	</div>
	<div class="info-btn">
		<div class="info-text">Add featured</div>
	</div>
</div>
<div class="photo-section">
	<div class="align">
		<div class="some-text">Photos</div>
		<div class="btn-text">See all photos</div>
	</div>
</div>
<div class="friend-section">
	<div class="align">
		<div class="some-text">Friends</div>
		<div class="btn-text">See all photos</div>
	</div>
</div>

<style>
	.info-section {
		@apply w-[360px] rounded-lg bg-[#ffffff] pt-[20px] pb-[20px] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.intro-text {
		@apply ml-[16px] text-[20px] font-semibold;
	}
	.info-btn {
		@apply ml-[16px] mr-[16px] mt-[16px] flex h-[36px] w-[328px] cursor-pointer items-center justify-center rounded-md bg-[#E5E6EB];
	}
	.info-text {
		@apply text-[15px] font-semibold;
	}
	.photo-section,
	.friend-section {
		@apply w-[100%] rounded-lg bg-[#ffffff] pt-[20px] pb-[20px] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.align {
		@apply ml-[16px] mr-[16px] flex flex-row items-center justify-between;
	}
	.some-text {
		@apply text-[20px] font-semibold;
	}
	.btn-text {
		@apply cursor-pointer text-[17px] text-[#1b6bda];
	}
</style>
