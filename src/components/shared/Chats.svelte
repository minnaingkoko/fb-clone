<div class="chats">
	<div class="row">
		<div class="heading">Chats</div>
		<div class="iconBtns">
			<div class="iconCircle">
				<div class="icon1" />
			</div>
			<div class="iconCircle">
				<div class="icon2" />
			</div>
			<div class="iconCircle">
				<div class="icon3" />
			</div>
			<div class="iconCircle">
				<div class="icon4" />
			</div>
		</div>
	</div>
	<div class="search">
		<img src="/images/search.svg" class="search-icon" alt="" />
		<div class="search-input">Search Messenger</div>
	</div>
	<div class="no-message">No messages found.</div>
	<div class="break-line" />
	<div class="see-all">See all in Messenger</div>
</div>

<style>
	.chats {
		@apply w-[360px] pt-[12px] pb-[12px] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20];
	}
	.row {
		@apply flex flex-row justify-between;
	}
	.heading {
		@apply ml-[16px] text-[24px] font-bold;
	}
	.iconBtns {
		@apply mr-[16px] flex flex-row;
	}
	.iconCircle {
		@apply w-[32px] h-[32px] flex justify-center items-center rounded-[50%] mr-[8px] cursor-pointer duration-300 bg-[#ffffff];
	}
	.iconCircle:hover {
		@apply bg-[#e0e2e7];
	}
	.icon1,
	.icon2,
	.icon3,
	.icon4 {
		@apply h-[20px] w-[20px] bg-no-repeat bg-auto;
	}
	.icon1 {
		@apply bg-[url('/images/three-dot.svg')];
	}
	.icon2 {
		@apply bg-[url('/images/util2.png')];
		background-position: 0px -551px;
	}
	.icon3 {
		@apply bg-[url('/images/util1.png')];
		background-position: 0px -209px;
	}
	.icon4 {
		@apply bg-[url('/images/util1.png')];
		background-position: 2px -1114px;
	}
	.search {
		@apply flex flex-row items-center w-[313px] h-[36px] ml-[23.5px] mt-[8px] mr-[23.5px] bg-[#F1F2F6] rounded-[50px];
	}
	.search-icon {
		@apply w-[16px] h-[16px] ml-[10px];
	}
	.search-input {
		@apply ml-[6px] text-[#66696f] text-[15px];
	}
	.no-message {
		@apply text-[17px] font-semibold mt-[24px] flex justify-center w-[100%];
	}
	.break-line {
		@apply w-[360px] h-[1px] bg-[#D9D9D9] mt-[16px] mb-[12px];
	}
	.see-all {
		@apply flex w-[100%] justify-center text-[15px] text-[#216FDB] font-semibold cursor-pointer duration-300;
	}
	.see-all:hover {
		@apply underline;
	}
</style>
