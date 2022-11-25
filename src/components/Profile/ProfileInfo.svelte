<script>
	import ProfileRoutes from './ProfileRoutes.svelte';
	import { user } from '../../stores/MainStores';
</script>

<div class="profile-info">
	<div class="info">
		<div class="white-circle">
			<div class="circle">
				<img class="profile-circle" src="/images/profile-main.webp" alt="profile-circle" />
			</div>
		</div>
		<div class="hide" />
		<div class="username">
			<div class="user-text">{$user.FirstName + $user.SurName}</div>
		</div>
		<div class="edit-btns">
			<div class="add-story">
				<div class="plus-btn">
					<img class="some-icon" src="/images/plus-b.svg" alt="" />
				</div>
				<div class="add-btn">Add to story</div>
			</div>
			<div class="edit-profile">
				<div>
					<img class="some-icon" src="/images/pen-solid.svg" alt="" />
				</div>
				<div class="edit-text">Edit profile</div>
			</div>
		</div>
	</div>
	<div class="break-line" />
	<ProfileRoutes />
</div>

<style>
	.profile-info {
		@apply flex w-[100%] flex-col items-center justify-center;
	}
	.info {
		@apply relative flex w-[876px] flex-row;
	}
	.white-circle {
		@apply absolute left-[0] bottom-[16px] flex h-[178px] w-[178px] cursor-pointer items-center justify-center rounded-[50%] bg-[#ffffff];
	}
	.circle {
		@apply h-[168px] w-[168px] cursor-pointer rounded-[50%];
	}
	.profile-circle {
		@apply h-[168px] w-[168px] rounded-[50%] object-cover;
	}
	.hide {
		@apply relative h-[178px] w-[178px];
	}
	.username {
		@apply relative ml-[16px] flex flex-col pt-[32px] pb-[32px];
	}
	.user-text {
		@apply text-[32px] font-semibold;
	}
	.edit-btns {
		@apply absolute bottom-[32px] right-[0] flex flex-row gap-[8px];
	}
	.add-story {
		@apply flex h-[36px] cursor-pointer flex-row items-center gap-[6px] rounded-md bg-[#1B74E4] pl-[12px] pr-[12px];
	}
	.plus-btn {
		@apply flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#ffffff];
	}
	.some-icon {
		@apply h-[12px] w-[12px];
	}
	.add-btn {
		@apply text-[15px] font-semibold text-[#ffffff];
	}
	.edit-profile {
		@apply flex h-[36px] cursor-pointer flex-row items-center gap-[6px] rounded-md bg-[#E4E6EB] pl-[12px] pr-[12px];
	}
	.edit-text {
		@apply text-[15px] font-semibold;
	}
	.break-line {
		@apply ml-[16px] w-[876px] h-[1px] bg-[#ced0d4];
	}
</style>
