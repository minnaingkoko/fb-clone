<script>
	import Form from './Form.svelte';
</script>

<div class="login-info">
	<div class="login-left">
		<div>
			<img class="h-[106px] w-[301px]" src="images/Facebook.svg" alt="logo-text" />
		</div>
		<div>
			<h2 class="info-text">
				Facebook helps you connect and share<br />with the people in your life.
			</h2>
		</div>
	</div>
	<div class="login-right">
		<Form />
		<div>
			<h3 class="extra-text">
				<div class="highlight-text">Create a Page</div>
				for a celebrity, brand or business.
			</h3>
		</div>
	</div>
</div>

<style>
	.login-info {
		@apply flex h-screen w-screen flex-row justify-center gap-[32px];
	}
	.login-left {
		@apply relative top-[204px] flex h-[calc(100vh_-_204px)] flex-col gap-[16px];
	}
	.login-right {
		@apply flex h-screen w-[396px] flex-col items-center justify-center gap-[28px];
	}
	.info-text {
		@apply ml-[30px] text-[28px] font-semibold;
	}
	.extra-text {
		@apply inline-block text-[14px] font-normal;
	}
	.highlight-text {
		@apply inline-block font-semibold;
	}
</style>
