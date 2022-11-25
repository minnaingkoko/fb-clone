<script lang="ts">
	export let link: string,
		IconUrl: string,
		pos: string,
		BtnHeading: string,
		BtnText: string,
		mt: string,
		ml: string,
		mr: string,
		mb: string;
</script>

<a
	href={link}
	class="custom-button"
	style="margin-top: {mt}px; margin-left: {ml}px; margin-right: {mr}px; margin-bottom: {mb}px;"
>
	<div class="button-icon">
		<div class="button-img" style="background-image: url({IconUrl}); background-position: {pos}" />
	</div>
	<div class="text">
		<div class="button-heading">
			{BtnHeading}
		</div>
		<div class="button-text">
			{@html BtnText}
		</div>
	</div>
</a>

<style>
	.custom-button {
		@apply flex w-[344px] cursor-pointer flex-row rounded-[8px] duration-300 pt-[8px] pb-[8px];
	}
	.custom-button:hover {
		@apply bg-[#e0e2e7];
	}
	.button-icon {
		@apply ml-[8px] h-[36px] w-[36px] bg-[#E5E6EB] rounded-[50%] flex justify-center items-center;
	}
	.button-img {
		@apply h-[20px] w-[20px] bg-no-repeat bg-auto;
	}
	.text {
		@apply ml-[12px] flex flex-col;
	}
	.button-heading {
		@apply text-[15px] font-semibold leading-[19px];
	}
	.button-text {
		@apply text-[13px] leading-[19px];
	}
</style>
