<script>
	import { newsfeed, user, menu, setting, help, display, keyboard, create, chats, notifications } from '../../stores/MainStores';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	const logout = async () => {
		const url = 'http://localhost:5173/api/logout';
		const res = await fetch(url);
		const data = await res.json();
		if (data.status === 302) {
			newsfeed.update((value) => (value = false));
			menu.update((value) => (value = false));
			redirect(302, '/');
			user.set({
				FirstName: '',
				SurName: '',
				emOph: '',
				Bday: 0,
				Bmonth: '',
				Byear: 0,
				Gender: ''
			});
		}
	};
	const profileBtn = () => {
		create.set(false);
		chats.set(false);
		notifications.set(false);
		menu.set(false);
		setting.set(false);
		help.set(false);
		display.set(false);
		goto('/profile');
	};

	const settingBtn = () => {
		menu.update((value) => (value = false));
		help.update((value) => (value = false));
		display.update((value) => (value = false));
		setting.update((value) => (value = true));
	};

	const helpBtn = () => {
		menu.update((value) => (value = false));
		setting.update((value) => (value = false));
		display.update((value) => (value = false));
		help.update((value) => (value = true));
	};

	const displayBtn = () => {
		menu.update((value) => (value = false));
		help.update((value) => (value = false));
		setting.update((value) => (value = false));
		display.update((value) => (value = true));
	};

	const backBtn = () => {
		menu.update((value) => true);
		setting.update((value) => (value = false));
		help.update((value) => (value = false));
		display.update((value) => (value = false));
	};

	const keyboardBtn = () => {
		keyboard.update((value) => (value = true));
		setting.update((value) => (value = false));
		help.update((value) => (value = false));
		display.update((value) => (value = false));
	};

	const backAltBtn = () => {
		display.update((value) => (value = true));
		keyboard.update((value) => (value = false));
	};
</script>

{#if $menu}
	<div class="menu">
		<button on:click={profileBtn} class="button">
			<img class="profile" src="/images/profile.webp" alt="" />
			<div class="heading">{$user.FirstName + $user.SurName}</div>
		</button>
		<button class="button" on:click={settingBtn}>
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util3.png); background-position: 0px -394px;"
				/>
			</div>
			<div class="text">Settings & privacy</div>
			<img class="next" src="/images/next.svg" alt="" />
		</button>
		<button class="button" on:click={helpBtn}>
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -322px;"
				/>
			</div>
			<div class="text">Help & support</div>
			<img class="next" src="/images/next.svg" alt="" />
		</button>
		<button class="button" on:click={displayBtn}>
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util5.png); background-position: 0px -513px;"
				/>
			</div>
			<div class="text">Display & Accessibility</div>
			<img class="next" src="/images/next.svg" alt="" />
		</button>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -175px;"
				/>
			</div>
			<div class="text">Give feedback</div>
		</div>
		<button on:click={logout} class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util6.png); background-position: 0px -179px;"
				/>
			</div>
			<div class="text">Log Out</div>
		</button>
		<div class="extra-text">
			Privacy · Terms · Advertising · Ad Choices · Cookies ·<br />More · Meta © 2022
		</div>
	</div>
{/if}

{#if $setting}
	<div class="setting">
		<div class="row">
			<button on:click={backBtn} class="back">
				<div class="back-icon" style="background-position: -146px -99px;" />
			</button>
			<div class="heading-alt">Settings & privacy</div>
		</div>
		<div class="custom-button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util3.png); background-position: 0px -394px;"
				/>
			</div>
			<div class="text">Settings</div>
		</div>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -280px;"
				/>
			</div>
			<div class="text">Privacy Checkup</div>
		</div>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util6.png); background-position: 0px -263px;"
				/>
			</div>
			<div class="text">Privacy Center</div>
		</div>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util8.png); background-position: 0px -796px;"
				/>
			</div>
			<div class="text">Activity log</div>
		</div>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -196px;"
				/>
			</div>
			<div class="text">Feed</div>
		</div>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util8.png); background-position: 0px -733px;"
				/>
			</div>
			<div class="text">Language</div>
		</div>
	</div>
{/if}

{#if $help}
	<div class="help">
		<div class="row">
			<button on:click={backBtn} class="back">
				<div class="back-icon" style="background-position: -146px -99px;" />
			</button>
			<div class="heading-alt">Help & support</div>
		</div>
		<div class="custom-button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -322px;"
				/>
			</div>
			<div class="text">Help Center</div>
		</div>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util8.png);     background-position: 0px -586px;"
				/>
			</div>
			<div class="text">Support Inbox</div>
		</div>
		<div class="button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util6.png); background-position: 0px -284px;"
				/>
			</div>
			<div class="text">Report a problem</div>
		</div>
	</div>
{/if}

{#if $display}
	<div class="display">
		<div class="row">
			<button on:click={backBtn} class="back">
				<div class="back-icon" style="background-position: -146px -99px;" />
			</button>
			<div class="heading-alt">Display & Accessibility</div>
		</div>
		<div class="dark">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util5.png); background-position: 0px -513px;"
				/>
			</div>
			<div class="column">
				<div class="text-alt">Dark Mode</div>
				<div class="alter-text">
					Adjust the appearance of Facebook to<br />reduce glare and give your eyes a break.
				</div>
				<div class="break" />
				<label for="dOff" class="row-alt">
					<label for="dOff">Off</label>
					<input checked type="radio" id="dOff" name="dTrigger" value="dOff" />
				</label>
				<label for="dOn" class="row-alt">
					<label for="dOn">On</label>
					<input type="radio" id="dOn" name="dTrigger" value="dOn" />
				</label>
				<label for="dAutomatic" class="row-alt">
					<div class="column">
						<label for="dAutomatic">Automatic</label>
						<label class="another-text" for="dAutomatic"
							>We'll automatically adjust the display based on<br />
							your device's system settings.</label
						>
					</div>
					<input type="radio" id="dAutomatic" name="dTrigger" value="dAutomatic" />
				</label>
			</div>
		</div>
		<div class="compact">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -406px;"
				/>
			</div>
			<div class="column">
				<div class="text-alt">Compact Mode</div>
				<div class="alter-text">
					Make your font size smaller so more<br />content can fit on the screen.
				</div>
				<div class="break" />
				<label for="cOff" class="row-alt">
					<label for="cOff">Off</label>
					<input checked type="radio" id="cOff" name="cTrigger" value="cOff" />
				</label>
				<label for="cOn" class="row-alt">
					<label for="cOn">On</label>
					<input type="radio" id="cOn" name="cTrigger" value="cOn" />
				</label>
			</div>
		</div>

		<button class="button" on:click={keyboardBtn}>
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -238px;"
				/>
			</div>
			<div class="text-alt">Keyboard</div>
			<img class="next" src="/images/next.svg" alt="" />
		</button>
	</div>
{/if}

{#if $keyboard}
	<div class="keyboard">
		<div class="row">
			<button on:click={backAltBtn} class="back">
				<div class="back-icon" style="background-position: -146px -99px;" />
			</button>
			<div class="heading-alt">Keyboard</div>
		</div>
		<div class="custom-button">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -238px;"
				/>
			</div>
			<div class="text-alt">See all keyboard shorcuts</div>
		</div>
		<div class="short">
			<div class="circle">
				<div
					class="icon"
					style="background-image: url(/images/util4.png); background-position: 0px -364px;"
				/>
			</div>
			<div class="column">
				<div class="text-alt">Use single-character keyboard shortcuts</div>
				<div class="alter-text">Use single-character shortcuts to perform common actions.</div>
				<div class="break" />
				<label for="sOff" class="row-alt">
					<label for="sOff">Off</label>
					<input checked type="radio" id="sOff" name="sTrigger" value="sOff" />
				</label>
				<label for="sOn" class="row-alt">
					<label for="sOn">On</label>
					<input type="radio" id="sOn" name="sTrigger" value="sOn" />
				</label>
			</div>
		</div>
	</div>
{/if}

<style>
	.menu {
		@apply w-[360px] pt-[12px] pb-[16px] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20] duration-300;
	}
	.button {
		@apply relative flex flex-row cursor-pointer w-[344px] pt-[8px] pb-[8px] pl-[8px] items-center ml-[8px] mr-[8px] rounded-lg duration-300;
	}
	.button:hover {
		@apply bg-[#e0e2e7];
	}
	.profile {
		@apply w-[36px] h-[36px] rounded-[50%];
	}
	.heading {
		@apply ml-[12px] text-[17px] font-semibold;
	}
	.custom-button {
		@apply mt-[4px] relative flex flex-row cursor-pointer w-[344px] pt-[8px] pb-[8px] pl-[8px] items-center ml-[8px] mr-[8px] rounded-lg duration-300;
	}
	.custom-button:hover {
		@apply bg-[#e0e2e7];
	}
	.circle {
		@apply w-[36px] h-[36px] bg-[#E5E6EB] flex justify-center items-center rounded-[50%];
	}
	.icon {
		@apply w-[20px] h-[20px] bg-no-repeat bg-auto;
	}
	.text {
		@apply text-[15px] ml-[12px];
	}
	.text-alt {
		@apply text-[17px] ml-[12px] font-semibold;
	}
	.extra-text {
		@apply ml-[16px] mt-[16px] mr-[8px] text-[13px];
	}
	.next {
		@apply absolute right-[8px] w-[24px] h-[24px];
	}
	.setting {
		@apply w-[360px] pt-[12px] pb-[16px] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20] duration-300;
	}
	.help {
		@apply w-[360px] pt-[12px] pb-[16px] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20] duration-300;
	}
	.display {
		@apply w-[360px] pt-[12px] pb-[16px] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20] duration-300;
	}
	.keyboard {
		@apply w-[360px] pt-[12px] pb-[12px] bg-[#ffffff] rounded-lg fixed top-[64px] right-[16px] z-[20] duration-300;
	}
	.row {
		@apply flex flex-row;
	}
	.back {
		@apply w-[36px] h-[36px] flex justify-center items-center ml-[16px] rounded-[50%] duration-300;
	}
	.back:hover {
		@apply bg-[#e0e2e7];
	}
	.back-icon {
		@apply w-[20px] h-[20px] bg-[url('/images/util7.png')] bg-no-repeat;
	}
	.heading-alt {
		@apply text-[24px] font-bold ml-[12px];
	}
	.dark {
		@apply mt-[4px];
	}
	.dark,
	.compact,
	.short {
		@apply relative flex flex-row w-[344px] pt-[8px] pb-[8px] pl-[8px] ml-[8px] mr-[8px] rounded-lg;
	}
	.column {
		@apply flex flex-col text-left w-[296px];
	}
	.alter-text {
		@apply ml-[12px] text-[15px] text-[#65676B];
	}
	.break {
		@apply relative;
	}
	.row-alt {
		@apply flex flex-row justify-between items-center w-[296px] pt-[12px] pb-[12px] pl-[8px] pr-[8px] rounded-lg duration-300;
	}
	.row-alt:hover {
		@apply bg-[#e0e2e7];
	}
	.another-text {
		@apply text-[12px] text-[#65676B];
	}
	input[type='radio'] {
		border: 0px;
		width: 20px;
		height: 20px;
	}
</style>
