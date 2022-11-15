<div class="story-info">
	<div class="story-text">
		<div class="icon1" />
		<div class="extra-text">Share everyday moments with friends and family.</div>
	</div>
	<div class="story-text">
		<div class="icon2" />
		<div class="extra-text">Stories disappear after 24 hours.</div>
	</div>
	<div class="story-text">
		<div class="icon3" />
		<div class="extra-text">Replies and reactions are private.</div>
	</div>
</div>

<style>
	.story-info {
		@apply flex flex-col justify-center gap-[16px];
	}
	.story-text {
		@apply flex flex-row items-center gap-[12px];
	}
	.icon1 {
		@apply inline-block h-[24px] w-[24px] bg-[url('/images/util.webp')] bg-auto bg-[left_-208px] bg-no-repeat;
	}
	.icon2 {
		@apply inline-block h-[24px] w-[24px] bg-[url('/images/util.webp')] bg-auto bg-[left_-308px] bg-no-repeat;
	}
	.icon3 {
		@apply inline-block h-[24px] w-[24px] bg-[url('/images/util.webp')] bg-auto bg-[left_-83px] bg-no-repeat;
	}
	.extra-text {
		@apply text-[13px];
	}
</style>
