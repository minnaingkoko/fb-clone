<div class="find-acc">
	<div class="container">
		<div class="intro">Find Your Account</div>
		<div class="break-line" />
		<div class="extra-text">
			Please enter your email address or mobile number to search for your account.
		</div>
		<input class="input-acc" placeholder="Email address or mobile number" type="text" />
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
	.extra-text {
		@apply mt-[16px] mb-[16px] ml-[16px] mr-[16px] text-[17px];
	}
	.input-acc {
		@apply w-[468px] h-[52px] border rounded-lg text-[16px] placeholder-[#7E7369] pl-[16px] ml-[16px] mr-[16px] mb-[16px];
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
