<div class="profile-routes">
	<div class="menu">
		<img class="menu-icon" src="/images/three-dot-alt.svg" alt="" />
	</div>
	<div class="post">
		<div class="post-text">Post</div>
		<div class="blue-line" />
	</div>
	<div class="other">
		<div class="other-text">About</div>
	</div>
	<div class="other">
		<div class="other-text">Friends</div>
	</div>
	<div class="other">
		<div class="other-text">Photos</div>
	</div>
	<div class="other">
		<div class="other-text">Videos</div>
	</div>
	<div class="other">
		<div class="other-text">Check-ins</div>
	</div>
	<div class="custom">
		<div class="other-text">More</div>
		<img class="down-arrow" src="/images/down-arrow.svg" alt="" />
	</div>
</div>

<style>
	.profile-routes {
		@apply relative flex h-[60px] w-[876px] flex-row;
	}
	.menu {
		@apply absolute right-[0] top-[12px] flex h-[36px] w-[48px] cursor-pointer items-center justify-center rounded-md bg-[#E4E6EB];
	}
	.menu-icon {
		@apply h-[16px] w-[16px];
	}
	.post {
		@apply relative other;
	}
	.post-text {
		@apply text-[15px] font-semibold text-[#1b6bda];
	}
	.blue-line {
		@apply absolute bottom-[0] h-[4px] w-[100%] bg-[#1b6bda];
	}
	.other {
		@apply flex cursor-pointer items-center justify-center pl-[16px] pr-[16px];
	}
	.other-text {
		@apply text-[15px] font-semibold text-[#676769];
	}
	.custom {
		@apply flex cursor-pointer flex-row items-center gap-[4px] pl-[16px] pr-[16px];
	}
	.down-arrow {
		@apply h-[16px] w-[16px];
	}
</style>