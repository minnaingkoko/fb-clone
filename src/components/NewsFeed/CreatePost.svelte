<script>
	import { user } from '../../stores/MainStores';
	$: username = `${$user.FirstName}${$user.SurName}`;
</script>

<div class="create-post">
	<div class="create-post-btn">
		<div class="profile">
			<img class="profile-img" src="/images/profile.webp" alt="profile" />
		</div>
		<div class="post-btn">What’s on your mind, {username}?</div>
	</div>
	<div class="break-line" />
	<div class="extra-btns">
		<div class="extra-btn">
			<img class="btn-icon" src="/images/live.svg" alt="btn" />
			<div class="btn-text">Live video</div>
		</div>
		<div class="extra-btn">
			<img class="btn-icon" src="/images/photo.svg" alt="btn" />
			<div class="btn-text">Photo/video</div>
		</div>
		<div class="extra-btn">
			<img class="btn-icon" src="/images/feeling.svg" alt="btn" />
			<div class="btn-text">Feeling/activity</div>
		</div>
	</div>
</div>

<style>
	.create-post {
		@apply mt-[16px] flex h-[123px] w-[500px] flex-col items-center rounded-lg bg-[#ffffff] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)];
	}
	.create-post-btn {
		@apply mt-[12px] flex flex-row gap-[8px];
	}
	.profile {
		@apply h-[40px] w-[40px] cursor-pointer rounded-[50%] duration-300;
	}
	.profile:hover {
		@apply brightness-90;
	}
	.profile-img {
		@apply h-[40px] w-[40px] rounded-[50%] object-cover;
	}
	.post-btn {
		@apply flex h-[40px] w-[420px] cursor-pointer items-center rounded-[20px] bg-[#f0f2f5] pl-[12px] text-[17px] text-[#6e676f] duration-300;
	}
	.post-btn:hover {
		@apply bg-[#e0e2e7];
	}
	.break-line {
		@apply h-[1px] mt-[12px] w-[468px] bg-[#e4e6eb];
	}
	.extra-btns {
		@apply mt-[9px] flex flex-row;
	}
	.extra-btn {
		@apply flex h-[40px] w-[155px] cursor-pointer flex-row items-center justify-center gap-[8px] rounded-lg duration-300;
	}
	.extra-btn:hover {
		@apply bg-[#f0f2f5];
	}
	.btn-icon {
		@apply h-[24px] w-[24px] object-cover;
	}
	.btn-text {
		@apply text-[15px] font-semibold text-[#7c676f];
	}
</style>
