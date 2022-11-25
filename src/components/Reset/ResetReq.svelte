<div class="find-acc">
	<div class="container">
		<div class="intro">Reset Your Password</div>
		<div class="break-line" />
		<div class="wrapper">
			<div class="left" />
			<div class="right">
				<img class="profile" src="/images/profile.webp" alt="" />
				<div class="username">Minnaingkoko</div>
				<div class="text">Facebook user</div>
			</div>
		</div>
		<div class="break-line" />
		<div class="btns">
			<div class="cancel">Cancel</div>
			<div class="search">Search</div>
		</div>
	</div>
</div>

<style>
	.find-acc {
		@apply w-[100%] flex justify-center;
	}
	.container {
		@apply w-[500px] bg-[#ffffff] rounded-lg mt-[80px];
	}
	.intro {
		@apply text-[20px] font-bold mt-[18px] ml-[18px] mb-[18px];
	}
	.break-line {
		@apply w-[500px] h-[1px] bg-[#D9D9D9];
	}
	.wrapper {
		@apply flex flex-row gap-[6px] ml-[16px] mr-[16px];
	}
	.left {
		@apply w-[277px] h-[200px];
	}
	.profile {
		@apply w-[60px] h-[60px] rounded-[50%] mb-[16px];
	}
	.username {
		@apply text-[15px];
	}
	.text {
		@apply text-[13px] text-[#8A7E76];
	}
	.right {
		@apply w-[185px] h-[200px] flex flex-col justify-center items-center;
	}
	.btns {
		@apply w-[100%] justify-end mt-[16px] mb-[16px] flex gap-[8px] flex-row;
	}
	.cancel {
		@apply w-[90px] h-[36px] rounded-lg cursor-pointer bg-[#e5e6eb] text-[#425164] text-[15px] font-semibold flex justify-center items-center;
	}
	.search {
		@apply w-[90px] h-[36px] rounded-lg cursor-pointer bg-[#1878f3] text-[#ffffff] text-[15px] font-semibold flex justify-center items-center mr-[16px];
	}
</style>
