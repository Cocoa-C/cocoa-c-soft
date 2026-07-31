<template>
    <div id="scene">
        <div class="boxBase">
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="front"></div>
            <div class="back"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cube'
}
</script>

<style scoped>
#scene {
    perspective: 200px;
    width:40px;
    height:40px;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}
.boxBase {
    transform-style:preserve-3d;
    width:40px;
    height:40px;
    animation: turnAround 30s linear 0s infinite normal none running;
}
@keyframes turnAround {
    0%{
        transform:rotateY(2520deg) rotateZ(0deg);
      }
    100%{
        transform:rotateY(0deg) rotateZ(720deg);
    }
}
.boxBase > div {
    position:absolute;
    background-color:#42bbcc3a;
    border:2px solid #42bbcc;
    backdrop-filter: blur(1px);
    width:100%;
    height:100%;
}
.boxBase > .top {
  transform:translateY(21.5px) rotateX(-90deg);
}
.boxBase > .bottom {
  transform:translateY(-21.5px) rotateX(90deg);
}
.boxBase > .front {
  transform:translateZ(21.5px);
}
.boxBase > .back {
  transform:translateZ(-21.5px) rotateX(180deg);
}
.boxBase > .left {
  transform:translateX(-21.5px) rotateY(-90deg);
}
.boxBase > .right {
  transform:translateX(21.5px) rotateY(90deg);
}
</style>