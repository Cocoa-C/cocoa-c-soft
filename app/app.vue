<script setup lang="ts">
useHead({
	titleTemplate: "%s - cocoa-c soft",
})
</script>

<template>
  	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

:root {
	--accent-300:#168ca9;
	--accent-500:#36c5dc;
	--card:#f5f5f5;
	--hover-overlay: rgb(0 0 0 / 5%);
	--hover-overlay-light: rgb(255 255 255 / 15%);
	--main-bg: white;
	--neutral:#757575;
	--text: black;
	@include dark {
		--card:#333333;
		--main-bg: #212121;
		--text: white;
		--neutral: #e5e4e4;
	}
}

html{
	background-color: var(--main-bg);
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;
}

body {
	min-height: 100vh;
	position: relative;
	isolation: isolate;
	background: transparent;
}

body::before {
	content: '';
	position: fixed;
	inset: 0;
	z-index: -1;
	pointer-events: none;
	background-color: #f5fbff;
	background-image:
		linear-gradient(135deg, transparent 0 49.8%, rgb(69 177 211 / 4%) 50%, transparent 50.2%),
		linear-gradient(rgb(64 143 181 / 4%) 1px, transparent 1px),
		linear-gradient(90deg, rgb(64 143 181 / 4%) 1px, transparent 1px),
		radial-gradient(ellipse at 8% 8%, rgb(128 221 239 / 24%), transparent 38%),
		radial-gradient(ellipse at 92% 88%, rgb(255 220 174 / 20%), transparent 34%),
		linear-gradient(145deg, #f7fcff 0%, #edf8ff 52%, #f8fcff 100%);
	background-size: 100% 100%, 72px 72px, 72px 72px, 100% 100%, 100% 100%, 100% 100%;
}

@media (prefers-reduced-motion: no-preference) {
	body::before {
		animation: sky-drift 28s ease-in-out infinite alternate;
	}

	@keyframes sky-drift {
		from { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }
		to { background-position: 18px -12px, 0 0, 0 0, 0 0, 0 0, 0 0; }
	}
}

@media (prefers-color-scheme: dark) {
	html {
		background-color: var(--main-bg);
	}

	body::before {
		background-color: #101d27;
		background-image:
			linear-gradient(135deg, transparent 0 49.8%, rgb(86 184 211 / 5%) 50%, transparent 50.2%),
			linear-gradient(rgb(135 196 214 / 5%) 1px, transparent 1px),
			linear-gradient(90deg, rgb(135 196 214 / 5%) 1px, transparent 1px),
			radial-gradient(ellipse at 8% 8%, rgb(29 126 151 / 22%), transparent 38%),
			radial-gradient(ellipse at 92% 88%, rgb(148 103 53 / 12%), transparent 34%),
			linear-gradient(145deg, #142532 0%, #182a32 52%, #202a2d 100%);
	}
}

* {
	padding: 0;
	margin: 0;
	font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p{
	margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6{
	font-family: 
	Cinzel,
	system-ui,
	sans-serif;
	color: var(--accent-500);
}

html body,
html body * {
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

a {
	text-decoration: none;
	color: var(--text);
}

.container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	padding: 0 35px;
	box-sizing: border-box;
}

.cube{
	position: fixed;
	opacity: 0.5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -100;
    pointer-events: none; 
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
        filter: blur(5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}

.page-leave-active {
  	transition: all 0.35s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

.page-leave-to {
  transform: translateY(-3rem);
  opacity: 0;
  filter: blur(5px);
}
</style>


