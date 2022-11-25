<div class="manage-posts">
	<div class="manage">
		<div class="post-intro">Posts</div>
		<div class="post-wrap">
			<div class="some-btn">
				<div class="filter-icon" />
				<div>Filters</div>
			</div>
			<div class="some-btn">
				<div class="manage-icon" />
				<div class="">Manage Posts</div>
			</div>
		</div>
	</div>
	<div class="break-line" />
	<div class="view">
		<div class="list-view">
			<div class="list-icon" />
			<div class="list-text">List view</div>
			<div class="blue-line" />
		</div>
		<div class="grid-view">
			<div class="grid-icon" />
			<div class="grid-text">Grid view</div>
		</div>
	</div>
</div>

<style>
	.manage-posts {
		@apply w-[500px] rounded-lg bg-[#ffffff] pt-[8px] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.manage {
		@apply ml-[16px] mr-[16px] flex flex-row items-center justify-between;
	}
	.post-intro {
		@apply text-[20px] font-semibold;
	}
	.post-wrap {
		@apply flex flex-row gap-[8px];
	}
	.some-btn {
		@apply flex h-[36px] cursor-pointer flex-row items-center gap-[6px] rounded-md bg-[#E5E6EB] pl-[12px] pr-[12px];
	}
	.filter-icon {
		@apply h-[16px] w-[16px] bg-[url('/images/filter.webp')] bg-auto bg-[left_-372px] bg-no-repeat;
	}
	.manage-icon {
		@apply h-[16px] w-[16px] bg-[url('/images/filter.webp')] bg-auto bg-[left_-508px] bg-no-repeat;
	}
	.break-line {
		@apply mt-[8px] h-[1px] w-[500px] bg-[#E4E6EB];
	}
	.view {
		@apply ml-[16px] mr-[16px] flex flex-row;
	}
	.list-view {
		@apply relative flex h-[40px] w-[234px] cursor-pointer flex-row items-center justify-center gap-[4px];
	}
	.list-icon {
		filter: invert(39%) sepia(57%) saturate(200%) saturate(200%) saturate(200%) saturate(200%)
			saturate(200%) saturate(147.75%) hue-rotate(202deg) brightness(97%) contrast(96%);
		@apply h-[16px] w-[16px] bg-[url('/images/grid.webp')] bg-auto bg-[left_-1395px] bg-no-repeat;
	}
	.list-text {
		@apply text-[15px] font-semibold text-[#1b6bda];
	}
	.blue-line {
		@apply absolute bottom-[0] h-[4px] w-[234px] bg-[#1b6bda];
	}
	.grid-view {
		@apply flex h-[40px] w-[234px] cursor-pointer flex-row items-center justify-center gap-[4px];
	}
	.grid-icon {
		@apply h-[16px] w-[16px] bg-[url('/images/grid.webp')] bg-auto bg-[left_-1293px] bg-no-repeat;
	}
	.grid-text {
		@apply text-[15px] font-semibold;
	}
</style>
