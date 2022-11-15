<script>
	import { register } from '../../stores/MainStores';
</script>

<div class="gender-text">
	Gender <img class="qm-icon" src="/images/qm.svg" alt="question-mark" />
</div>
<div class="gender">
	<div class="gender-option">
		<label for="female">Female</label>
		<input bind:group={$register.Gender} id="female" type="radio" name="gender" value="Female" />
	</div>
	<div class="gender-option">
		<label for="male">Male</label>
		<input bind:group={$register.Gender} id="male" type="radio" name="gender" value="Male" />
	</div>
	<div class="gender-option">
		<label for="custom">Custom</label>
		<input bind:group={$register.Gender} id="custom" type="radio" name="gender" value="Custom" />
	</div>
</div>

<style>
	.gender-text {
		@apply mt-[10px] ml-[16px] flex flex-row items-center gap-[6px] text-[12px];
	}
	.qm-icon {
		@apply h-[12px] w-[12px];
	}
	.gender {
		@apply mt-[6px] flex flex-row justify-center gap-[16px];
	}
	.gender-option {
		@apply flex h-[36px] w-[123px] items-center justify-between rounded border-[1px] border-solid border-[#ccd0d5] bg-[#ffffff] pl-[8px] pr-[8px] text-[15px];
	}
</style>