<script>
	import InfoSection from './InfoSection.svelte';
	let Top = 0;
	let glo1 = 0;
	let con = false;

	let onScroll = () => {
		let winTop = window.pageYOffset;
		if (winTop > Top) {
			// scroll down
			let left = document.getElementById('left');
			let test = document.getElementById('test');
			if( left !== null && test !== null){
				let result = winTop + 32;
				let value = result - left.offsetHeight;
				if (value < 0) {
					test.style.height = '0px';
					glo1 = 0;
				} else if (value > 0 && con) {
					test.style.height = `${value}px`;
					con = false;
				}
				left.style.top = '-970px';
				left.style.bottom = 'initial';
			}
		} else {
			//scroll up
			let left = document.getElementById('left');
			let test = document.getElementById('test');
			if(left !== null && test !== null){
				con = true;
				let result = winTop + 32;
				let value = result - left.offsetHeight;
				console.log(value);
				if (value > 0 && value > glo1) {
					test.style.height = `${value}px`;
					glo1 = value;
				}
				left.style.bottom = '-1043px';
				left.style.top = 'initial';	
			}
		}
		Top = winTop <= 0 ? 0 : winTop;
	};
</script>

<svelte:window on:scroll={onScroll} />

<div>
	<div id="test" />
	<div id="left" class="info-wrapper">
		<InfoSection />
		<div class="extra-section">
			<div class="extra-text">Privacy</div>
			·
			<div class="extra-text">Terms</div>
			·
			<div class="extra-text">Advertising</div>
			·
			<div class="extra-text">Ad Choices</div>
			·
			<div class="extra-text">Cookies</div>
			·
			<div class="extra-text">More</div>
			· Meta © 2022
		</div>
	</div>
</div>

<style>
	.info-wrapper {
		@apply sticky bottom-[-1043px] mt-[16px] flex w-[360px] flex-col gap-[16px];
	}
	.extra-section {
		@apply mb-[16px] w-[360px] text-[13px];
	}
	.extra-text {
		@apply inline-block cursor-pointer;
	}
</style>