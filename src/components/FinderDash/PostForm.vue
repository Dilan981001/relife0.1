<template>
  <q-layout view="lHh lpR lFf">

      <LeftBarf />
    
    <q-page-container>

    <div class="q-pa-md q-gutter-sm">
    <q-btn color="green" icon="chevron_left" label="Back" />
    </div>

    <q-card class="q-mx-md q-pa-md" bordered>

    <div class="q-pa-md q-mx-md "  >

    <div class="row">

    <div class="col-6" >

       <q-input v-model="ph1" label="Post title" placeholder="Describe shortly what you need" hint="With placeholder" :dense="dense" style="max-width: 300px"/>

       <q-input v-model="ph2" label="Post description" placeholder="give short description that you want" hint="With placeholder" :dense="dense" style="max-width: 300px"/>

       <q-input v-model="ph3" label="Abandont name" placeholder="add abandon people name here" hint="With placeholder" :dense="dense" style="max-width: 300px"/>

       <q-input v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" style="max-width: 300px"/>

       <q-input v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" style="max-width: 300px"/>

    </div>

    <div class="col-6">

       <q-input v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" style="max-width: 300px"/>

       <q-input v-model="ph" label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" style="max-width: 300px"/>

        <q-input bottom-slots v-model="text" label="Location" counter :dense="dense" style="max-width: 300px; margin-bottom:20px;">
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          add nearest town here
        </template>
      </q-input>

       <q-input
        @update:model-value="val => { files = val }"
        multiple
        filled
        type="file"
        hint="Native file (multiple)"
        style="max-width: 300px; margin-bottom:20px;"
      />

       <q-input
        v-model="textareaModel"
        filled
        clearable
        type="textarea"
        color="red-12"
        label="Textarea with shadow text"
        hint="Press TAB to autocomplete suggested value or ESC to cancel suggestion"
        :shadow-text="textareaShadowText"
        @keydown="processTextareaFill"
        @focus="processTextareaFill"
      />

    </div>
 
    <div class="row">
    <div class="col-6" style="margin-left:-20px; margin-bottom:10px;">
        <q-toggle v-model="accept" label="I accept the license and terms" />
    </div>

        <div class="col-6" style=" margin-left:20px;" >
          <q-btn label="Submit" type="submit" color="green"/>
          <q-btn label="Reset" type="reset" color="green" flat class="q-ml-sm" />
        </div>
    </div>
    </div>    
     
    </div>

    </q-card>
     
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import LeftBarf from "./LeftBarf.vue";

export default {
  components: {
    LeftBarf
  },
  setup () {
 
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false),
      file: ref(null),
      files: ref(null)
    }
  }
}
</script>
