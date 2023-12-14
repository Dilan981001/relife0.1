<template>
  <q-layout view="lHh lpr fff">
  <q-page-container>

<!---rightsidebar---->
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" behavior="desktop" bordered>
    

  <div class="right-sidebar-container">
    <q-toolbar class="q-mt-lg">
      <q-space></q-space>
      <q-btn round icon="notifications">
        <q-badge floating color="green" rounded />
      </q-btn>
    </q-toolbar>
    <div class="flex flex-center column">
      <q-avatar size="120px">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
      <div class="q-pa-md">
      <!--dropdown button-->
    <q-btn-dropdown
      class="glossy"
      color="green"
      label="Account Settings"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Meesage" />
          <q-toggle v-model="bluetooth" label="Posts" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn
            color="green"
            label="More Setting"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>

      <div class="text-h5"><strong>86%</strong></div>
    </div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">All activity</div>
        <q-space></q-space>
        <q-btn round icon="fas fa-chevron-right" size="10px" color="green"></q-btn>
      </q-toolbar>
    </q-card>
    <q-card class="q-mx-md q-mt-lg" bordered>
      <q-toolbar>
        <div class="text-overline text-weight-bolder">Tikiri Sewana</div>
        <q-space></q-space>
        <q-avatar size="25px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-overline q-ml-sm">Madhushan</div>
      </q-toolbar>
      <q-separator />
      <div class="q-pa-md row justify-center">
        <div style="width:100%; max-width: 400px">
          <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar4.jpg" :text="['Can i know about your place']"
                          sent stamp="7 minutes ago">

          </q-chat-message>
          <q-chat-message name="JAne" avatar="https://cdn.quasar.dev/img/avatar3.jpg" :text="['Yes of course']"
                          stamp="4 minutes ago">

          </q-chat-message>
        </div>
      </div>
      <q-input bottom-slots v-model="text" label="Your message.." class="q-mx-sm">
        <template v-slot:after>
          <q-btn round dense flat icon="fas fa-paper-plane" color="green" size="10px" class="q-mt-md" />
        </template>
      </q-input>
    </q-card>
    <!--meassage-->
    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">Jinananda Children Home </div>
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>

    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">Thudawa Girl’s Home </div>
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>

    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">Amarapura Elder’s Home </div>
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>

    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <q-btn color="green"  label="Contact More" class="full-width" />
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>
    <div class="q-mt-lg"></div>

  
  </div>
</q-drawer>
<!--end of right side bar-->
        
<parent-dash />
    
</q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import ParentDash from '@/components/ParentDash.vue';


export default {

    components: {
    ParentDash,
    
  },

  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },
 data () {
    return {
      text: ''
    }
  }
}
</script>
