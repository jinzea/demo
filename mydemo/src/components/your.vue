<template>
    <div class="box">
        <div class="left">
            <router-link class="one" tag="div" to="/your/yourson">one</router-link>
            <router-link class="two" tag="div" to="/your/www">two</router-link>
            <router-link class="three" tag="div" to="/your/sss">three</router-link>
        </div>
        <div class="right">
            <router-view/>
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">
.box{
    width: 100%;
    height: 680px;
    background: oldlace;
    display: flex;
    .left{
        width: 200px;
        height: 100%;
        background:#ffffff;
        div{
            &:hover{
                background: #ccc;
            }
        }
        .one{
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
        }
        .two{
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
        }
        .three{
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
        }
    }
    .right{
        flex: 1;
        padding: 20px;
        box-sizing: border-box;
        background: #F0F2F3;
    }
}
</style>