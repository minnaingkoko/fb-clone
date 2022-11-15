<script>
	import BirthPost from './BirthPost.svelte';
	import ManagePosts from './ManagePosts.svelte';
</script>

<div class="post-wrapper">
	<div class="post-wrap">
		<div class="create-post">
			<img class="profile-img" src="/images/profile.webp" alt=""/>
			<input class="create-btn" type="text" placeholder="What’s on your mind?"/>
		</div>
		<div class="break-line" />
		<div class="extra-btns">
			<div class="extra-btn">
				<img class="some-icon" src="/images/live.svg" alt="" />
				<div class="extra-text">Live video</div>
			</div>
			<div class="extra-btn">
				<img class="some-icon" src="/images/photo.svg" alt="" />
				<div class="extra-text">Photo/video</div>
			</div>
			<div class="extra-btn">
				<div class="event-icon"/>
				<div class="extra-text">Life Event</div>
			</div>
		</div>
	</div>
	<ManagePosts />
	<BirthPost />
</div>

<style>
	.post-wrapper {
		@apply relative mt-[16px] flex w-[500px] flex-col gap-[16px] pb-[16px];
	}
	.post-wrap {
		@apply w-[500px] rounded-lg bg-[#ffffff] pt-[12px] pb-[12px] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.create-post {
		@apply ml-[16px] mr-[16px] flex flex-row gap-[8px];
	}
	.profile-img {
		@apply h-[40px] w-[40px] cursor-pointer rounded-[50%] object-cover;
	}
	.create-btn {
		@apply h-[40px] w-[420px] rounded-[50px] bg-[#F0F2F5] pl-[12px] pr-[12px] outline-none;
	}
	.break-line {
		@apply mt-[12px] ml-[16px] mr-[16px] h-[1px] w-[468px] bg-[#E4E6EB];
	}
	.extra-btns {
		@apply mt-[8px] flex flex-row pl-[16px] pr-[16px];
	}
	.extra-btn {
		@apply flex h-[40px] w-[156px] cursor-pointer flex-row items-center justify-center gap-[8px];
	}
	.some-icon {
		@apply h-[24px] w-[24px] object-cover;
	}
	.event-icon {
		@apply inline-block h-[20px] w-[20px] bg-[url('/images/flag.webp')] bg-auto bg-[left_-21px] bg-no-repeat;
	}
	.extra-text {
		@apply font-[15px] font-[#7C676F];
	}
</style>