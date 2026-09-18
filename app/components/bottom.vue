<script lang="ts">
export default {
    name: 'Bottom'
}
</script>

<template>
    <div class="bottom">
        <a href="https://icp.gov.moe/?keyword=20260629" target="_blank">萌ICP备20260629号</a>
    </div>
</template>

<style scoped lang="scss">
.bottom{
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    z-index: 1000;
    bottom: 0;
    font-size: 17px;
    background: var(--card);
    a{
        color: var(--text);
        text-decoration: none;
        transition: 0.2s;
        &:hover{
            color: var(--accent-500);
        }
    }
}
</style>