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
    perspective: 1000px;
    width:400px;
    height:400px;
    opacity: 0.2;
    position: fixed;
    display:flex;
    top: 50%;
    left: 50%;
    transform:translateX(-50%) translateY(-50%);
    justify-content: center;
    align-items: center;
    z-index: 10;
}
.boxBase {
    transform-style:preserve-3d;
    width:400px;
    height:400px;
    animation: turnAround 180s linear 0s infinite normal none running;
}
@keyframes turnAround {
    0%{
          transform:rotateY(2520deg) rotateZ(0deg);
      }
    100%{
        transform:rotateY(0deg) rotateZ(3960deg);
    }
}
.boxBase > div {
    position:absolute;
    background-color:#42bbcc5a;
    border:2px solid #42bbcc;
    width:100%;
    height:100%;
}
.boxBase > .top {
  transform:translateY(200px) rotateX(-90deg);
}
.boxBase > .bottom {
  transform:translateY(-200px) rotateX(90deg);
}
.boxBase > .front {
  transform:translateZ(200px);
}
.boxBase > .back {
  transform:translateZ(-200px) rotateX(180deg);
}
.boxBase > .left {
  transform:translateX(-200px) rotateY(-90deg);
}
.boxBase > .right {
  transform:translateX(200px) rotateY(90deg);
}
</style>