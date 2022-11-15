<script>
	import ReactionBtns from './ReactionBtns.svelte';
</script>

<div class="reaction">
	<div class="reaction-icons">
		<div class="like">
			<img class="like-icon" src="/images/like.svg" alt="like" />
		</div>
		<div class="love">
			<img class="love-icon" src="/images/love.svg" alt="love" />
		</div>
		<div class="reaction-count">989</div>
	</div>
	<div class="comments-shares">
		<div class="counts">136 Comments</div>
		<div class="counts">83 shares</div>
	</div>
</div>
<div class="break-line" />
<ReactionBtns />

<style>
	.reaction {
		@apply ml-[16px] mr-[16px] flex h-[43px] w-[468px] flex-row items-center justify-between;
	}
	.reaction-icons {
		@apply flex flex-row items-center;
	}
	.like {
		@apply z-[2] h-[18px] w-[18px] cursor-pointer;
	}
	.like-icon {
		@apply h-[18px] w-[18px] object-cover;
	}
	.love {
		@apply relative left-[-2px] z-[1] h-[18px] w-[18px] cursor-pointer;
	}
	.love-icon {
		@apply h-[18px] w-[18px] object-cover;
	}
	.reaction-count {
		@apply ml-[6px] flex cursor-pointer items-center justify-center text-[16px] text-[#6a6c70] duration-300;
	}
	.reaction-count:hover {
		@apply underline;
	}
	.comments-shares {
		@apply flex flex-row items-center gap-[6px];
	}
	.counts {
		@apply ml-[6px] flex cursor-pointer items-center justify-center text-[16px] text-[#6a6c70] duration-300;
	}
	.counts:hover {
		@apply underline;
	}
	.break-line {
		@apply ml-[16px] mr-[16px] w-[458px] h-[1px] bg-[#ced0d4];
	}
</style>
