<div class="reaction-btns">
	<div class="reaction-btn">
		<div class="like-btn" />
		<div class="btn-text">Like</div>
	</div>
	<div class="reaction-btn">
		<div class="comment-btn" />
		<div class="btn-text">Comment</div>
	</div>
	<div class="reaction-btn">
		<div class="share-btn" />
		<div class="btn-text">Share</div>
	</div>
	<div class="extra-btn">
		<div class="mini-profile">
			<img class="mini-profile-img" src="/images/profile.webp" alt="mini profile" />
		</div>
		<div class="mini-menu">
			<img class="mini-menu-img" src="/images/profile.svg" alt="mini menu" />
		</div>
	</div>
</div>

<style>
	.reaction-btns {
		@apply ml-[16px] mr-[16px] flex h-[52px] w-[468px] flex-row items-center justify-center;
	}
	.reaction-btn {
		@apply flex h-[44px] w-[129px] cursor-pointer flex-row items-center justify-center gap-[8px] rounded-lg duration-300;
	}
	.reaction-btn:hover {
		@apply bg-[#f0f2f5];
	}
	.like-btn {
		@apply inline-block h-[18px] w-[18px] bg-[url('/images/Util-alt.webp')] bg-auto bg-[left_-322px] bg-no-repeat;
	}
	.comment-btn {
		@apply inline-block h-[18px] w-[18px] bg-[url('/images/Util-alt.webp')] bg-auto bg-[left_-285px] bg-no-repeat;
	}
	.share-btn {
		@apply inline-block h-[18px] w-[18px] bg-[url('/images/Util-alt.webp')] bg-auto bg-[left_-341px] bg-no-repeat;
	}
	.btn-text {
		@apply text-[15px] text-[#606770];
	}
	.extra-btn {
		@apply flex h-[44px] w-[53px] cursor-pointer items-center justify-center rounded-lg duration-300;
	}
	.extra-btn:hover {
		@apply bg-[#f0f2f5];
	}
	.mini-profile {
		@apply h-[20px] w-[20px] cursor-pointer rounded-[50%];
	}
	.mini-profile-img {
		@apply h-[20px] w-[20px] rounded-[50%] object-cover;
	}
	.mini-menu {
		@apply ml-[5px] h-[12px] w-[12px] cursor-pointer;
	}
	.mini-menu-img {
		@apply h-[12px] w-[12px] object-cover;
	}
</style>
