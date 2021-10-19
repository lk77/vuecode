<template lang="html">
  <div class="con-prueba">
    <div class="con-example">
      <vuecode title="Add new proyect vuecode">
        <template v-slot:demo>
          <div>
            <button class="btn" type="button" name="button">Example</button>
          </div>
        </template>


        <template v-slot:code>
          <div>
```js{1,6}
var btn = document.querySelector('.btn')

btn.addEventListener( 'click' , function(){
  console.log('click')
})
```
          </div>
        </template>
      </vuecode>
    </div>
  </div>
</template>

<script>
// import vuecode from './vuecode/vuecode.vue'
export default {
  // components:{
  //   vuecode,
  // },

}
</script>

<style lang="stylus">
.con-prueba
  padding-top: 100px
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration: none;
  font-family: arial;
}

</style>
