<div class="nav-bar">
	<div class="left">facebook</div>
	<div class="right">
		<input placeholder="Email or phone" class="input-info" type="text" />
		<input placeholder="Password" class="input-info" type="password" />
		<div class="log-in">Log in</div>
		<div class="forget-acc">Forgetten account?</div>
	</div>
</div>

<style>
	.nav-bar {
		@apply w-[100%] h-[56px] bg-[#FFFFFF] pl-[16px] pr-[16px] flex flex-row justify-between items-center;
	}
	.left {
		@apply text-[20px] font-bold text-[#385898] cursor-pointer;
	}
	.right {
		@apply flex flex-row gap-[8px] items-center;
	}
	.input-info {
		@apply w-[188px] h-[40px] border rounded-lg text-[15px] placeholder-[#7E7369] pl-[12px];
	}
	.log-in {
		@apply w-[69px] h-[40px] flex justify-center items-center bg-[#1b74e4] text-[#ffffff] text-[15px] cursor-pointer rounded-lg;
	}
	.forget-acc {
		@apply text-[15px] text-[#216FDB] cursor-pointer duration-300;
	}
	.forget-acc:hover {
		@apply underline;
	}
</style>
