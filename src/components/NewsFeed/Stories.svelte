<script>
	import StoryInfo from './StoryInfo.svelte';
</script>

<div class="stories">
	<div class="stories-btns">
		<div class="story-btn">
			Stories
			<div class="blue-line" />
		</div>
		<div class="other-btn">
			<div class="btn-trigger">Reels</div>
		</div>
		<div class="other-btn">
			<div class="btn-trigger">Rooms</div>
		</div>
	</div>
	<div class="break-line" />
	<div class="create-story">
		<div class="next">
			<img class="next-icon" src="/images/next.svg" alt="">
		</div>
		<div class="story-wrapper">
			<img class="story-icon" src="/images/story.webp" alt="" />
			<div class="plus-wrap">
				<div class="blue-circle">
					<img class="plus-icon" src="/images/plus-w.svg" alt="" />
				</div>
			</div>
			<div class="create-btn">Create a story</div>
		</div>
		<StoryInfo />
	</div>
</div>

<style>
	.create-story {
		@apply relative;
	}
	.next {
		@apply cursor-pointer absolute right-[0px] top-[50%] flex translate-y-[-50%] w-[48px] h-[48px] border rounded-[50%] border-[#DFDFDF] justify-center items-center duration-300;
	}
	.next-icon {
		@apply w-[24px] h-[24px] object-cover;
	}
	.next:hover {
		@apply bg-[#f0f2f5];
	}
	.stories {
		@apply mt-[8px] w-[500px] rounded-lg bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.stories-btns {
		@apply mr-[16px] ml-[16px] flex h-[72px] flex-row items-center justify-center;
	}
	.story-btn {
		@apply relative flex h-[72px] w-[156px] cursor-pointer items-center justify-center text-[15px] font-semibold text-[#3672BA];
	}
	.blue-line {
		@apply absolute bottom-[0px] h-[4px] w-[156px] bg-[#3672BA];
	}
	.other-btn {
		@apply flex h-[60px] w-[156px] cursor-pointer items-center justify-center text-[15px] font-semibold text-[#656769];
	}
	.btn-trigger {
		@apply flex h-[60px] w-[148px] items-center justify-center rounded-lg duration-300;
	}
	.btn-trigger:hover {
		@apply bg-[#f0f2f5];
	}
	.break-line {
		@apply h-[1px] w-[500px] bg-[#E5E5E5];
	}
	.create-story {
		@apply m-[16px] flex flex-row gap-[24px];
	}
	.story-wrapper {
		@apply flex h-[200px] w-[112px] cursor-pointer flex-col items-center rounded-lg shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.story-icon {
		@apply h-[150px] w-[112px] rounded-t-lg object-cover;
	}
	.plus-wrap {
		@apply relative top-[-20px] flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#ffffff];
	}
	.blue-circle {
		@apply flex h-[32px] w-[32px] items-center justify-center rounded-[50%] bg-[#1876F2];
	}
	.plus-icon {
		@apply h-[20px] w-[20px] object-cover;
	}
	.create-btn {
		@apply mb-[12px] text-[12px] font-semibold;
	}
</style>
