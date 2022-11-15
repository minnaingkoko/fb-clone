<script lang="ts">
	export let link: string,
		IconUrl: string,
		BtnText: string,
		mt: string,
		ml: string,
		mr: string,
		mb: string,
		br: string,
		slide: boolean;
</script>

<a href={link}
	class="custom-button"
	style="margin-top: {mt}px; margin-left: {ml}px; margin-right: {mr}px; margin-bottom: {mb}px; {slide ? 'display: flex' : 'display: none'}"
>
	<div class="button-icon">
		<img class="button-img" src={IconUrl} style="border-radius: {br}%;" alt="icon" />
	</div>
	<div class="button-text">
		{BtnText}
	</div>
</a>

<style>
	.custom-button {
		@apply flex h-[44px] w-[287px] cursor-pointer flex-row items-center rounded-[8px] duration-300;
	}
	.custom-button:hover {
		@apply bg-[#e0e2e7];
	}
	.button-icon {
		@apply ml-[8px] h-[28px] w-[28px];
	}
	.button-img {
		@apply h-[28px] w-[28px] object-cover;
	}
	.button-text {
		@apply ml-[12px] text-[15px] font-medium;
	}
</style>
