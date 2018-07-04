<template>
  <div class="hello">
    <gis></gis>
  </div>
</template>

<script>
  import gis from "./gis.vue"
export default {
  name: 'HelloWorld',
  components:{
    gis,
  },
  data () {
    return {
      msg: 'Welcome to Your running men'
    }
  },
  created(){
    var myArray=[1,2,4,5,6,7]
    myArray.name="数组";
    for (var value of myArray) {
      console.log(value);
    }
  },
  mounted(){
  },
  methods: {
    jz:function(){
      console.log(1111);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
