<script lang="ts">
	import { register } from '../../stores/MainStores';
	let date = new Date();
	let cd = date.getDate();
	let cm = date.getMonth();
	let cy = date.getFullYear();
	let days: number[] = [];
	for (let i = 0; i < 31; i++) {
		days[i] = i + 1;
	}
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	let years: number[] = [];
	let sy = cy - 117;
	for (let k = 0; k <= 117; k++) {
		years[k] = sy + k;
	}
</script>

<div class="birth-date">
	Date of birth <img class="qm-icon" src="/images/qm.svg" alt="question-mark" />
</div>
<div class="birth">
	<select bind:value={$register.Bday} class="bday" name="bday">
		{#each days as day}
			{#if day === cd}
				<option value={day} selected>{day}</option>
			{:else}
				<option value={day}>{day}</option>
			{/if}
		{/each}
	</select>
	<select bind:value={$register.Bmonth} class="bmonth" name="bmonth">
		{#each months as month}
			{#if month === months[cm]}
				<option value={month} selected>{month.substring(0, 3)}</option>
			{:else}
				<option value={month}>{month.substring(0, 3)}</option>
			{/if}
		{/each}
	</select>
	<select bind:value={$register.Byear} class="byear" name="byear">
		{#each years as year}
			{#if year === cy}
				<option value={year} selected>{year}</option>
			{:else}
				<option value={year}>{year}</option>
			{/if}
		{/each}
	</select>
</div>

<style>
	.birth-date {
		@apply mt-[10px] ml-[16px] flex flex-row items-center gap-[6px] text-[12px];
	}
	.qm-icon {
		@apply h-[12px] w-[12px];
	}
	.birth {
		@apply mt-[6px] flex flex-row justify-center gap-[16px];
	}
	.bday {
		@apply flex h-[36px] w-[123px] appearance-none items-center justify-between rounded border-[1px] border-solid border-[#ccd0d5] bg-[#ffffff] bg-[url('/images/arrow.webp')] bg-[right_8px_center] bg-no-repeat pl-[8px] pr-[8px] text-[15px] outline-none;
		background-size: 14px;
	}
	.bmonth {
		@apply flex h-[36px] w-[123px] appearance-none items-center justify-between rounded border-[1px] border-solid border-[#ccd0d5] bg-[#ffffff] bg-[url('/images/arrow.webp')] bg-[right_8px_center] bg-no-repeat pl-[8px] pr-[8px] text-[15px] outline-none;
		background-size: 14px;
	}
	.byear {
		@apply flex h-[36px] w-[123px] appearance-none items-center justify-between rounded border-[1px] border-solid border-[#ccd0d5] bg-[#ffffff] bg-[url('/images/arrow.webp')] bg-[right_8px_center] bg-no-repeat pl-[8px] pr-[8px] text-[15px] outline-none;
		background-size: 14px;
	}
</style>
