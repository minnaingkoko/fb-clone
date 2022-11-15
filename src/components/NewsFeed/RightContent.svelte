<div class="right-content">
	<div class="some-text">Group conversations</div>
	<div class="custom-btn">
		<div class="plus">
			<img class="plus-icon" src="/images/plus.svg" alt="icon" />
		</div>
		<div class="btn-text">Create New Group</div>
	</div>
</div>

<style>
	.right-content {
		@apply fixed right-[0] h-[calc(100vh_-_64px)] w-[324px] overflow-y-auto;
	}
	.some-text {
		@apply mt-[20px] ml-[16px] mr-[16px] flex flex-row items-center justify-between text-[17px] font-semibold text-[#5c5d61];
	}
	.custom-btn {
		@apply ml-[8px] mb-[8px] mt-[8px] mr-[16px] flex h-[44px] w-[287px] cursor-pointer flex-row items-center rounded-lg duration-300;
	}
	.custom-btn:hover {
		@apply bg-[#e0e2e7];
	}
	.plus {
		@apply ml-[8px] flex h-[28px] w-[28px] items-center justify-center rounded-[50%] bg-[#e4e6eb];
	}
	.plus-icon {
		@apply h-[16px] w-[16px] object-cover;
	}
	.btn-text {
		@apply ml-[12px] text-[15px] font-medium;
	}
</style>
