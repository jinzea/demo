<template>
  <div>
    <div class="boxs">
        <ul class="ul">
            <router-link to="/your/yourson" tag="li" style="color: red;">你</router-link>
            <router-link to="/we" tag="li" style="color:blue;">我</router-link>
            <router-link to="/" tag="li" style="color:orange;">她</router-link>
          </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
.boxs{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  .ul{
    margin: 0 auto;
    width:300px;
    height: 100%;
  li{
    float: left;
    list-style: none;
    width: 100px;
    text-align:center;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
}
}


</style>
