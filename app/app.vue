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
	--accent-300:#104f58;
	--accent-500:#42bbcc;
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
	-webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Standard */
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
