<div class="birth-btn">
	<img class="profile-icon" src="/images/profile.webp" alt="" />
	<div class="write-comment">
		Write a comment...
		<div class="icon-section">
			<div class="icon1" />
			<div class="icon2" />
			<div class="icon3" />
			<div class="icon4" />
		</div>
	</div>
</div>
<div class="ml-[54px] mt-[6px] text-[12px]">Press enter to post.</div>

<style>
	.birth-btn {
		@apply ml-[16px] mr-[16px] mt-[10px] flex flex-row gap-[6px];
	}
	.profile-icon {
		@apply h-[32px] w-[32px] rounded-[50%] object-cover;
	}
	.write-comment {
		@apply relative flex h-[36px] w-[430px] items-center rounded-[50px] bg-[#F0F2F5] pl-[12px] pr-[12px] text-[15px] text-[#65676B] outline-none;
	}
	.icon-section {
		@apply absolute right-[12px] flex flex-row gap-[12px];
	}
	.icon1 {
		@apply h-[16px] w-[16px] bg-[url('/images/reaction.webp')] bg-auto bg-[left_-438px] bg-no-repeat;
	}
	.icon2 {
		@apply h-[16px] w-[16px] bg-[url('/images/reaction.webp')] bg-auto bg-[left_-370px] bg-no-repeat;
	}
	.icon3 {
		@apply h-[16px] w-[16px] bg-[url('/images/reaction.webp')] bg-auto bg-[left_-472px] bg-no-repeat;
	}
	.icon4 {
		@apply h-[16px] w-[16px] bg-[url('/images/reaction.webp')] bg-auto bg-[left_-574px] bg-no-repeat;
	}
	.icon1,
	.icon2,
	.icon3,
	.icon4 {
		filter: invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg)
			brightness(94%) contrast(86%);
	}
</style>
