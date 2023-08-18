<template>
 <div class="input">
              <q-input
                outlined
                rounded
                placeholder="Search Products"
                dense
                bg-color="white"
                color="black"
                label-color="black"
              >
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
</template>



<script>

export default{
    name:'SearchBox'
}


</script>


<style scoped>




</style>