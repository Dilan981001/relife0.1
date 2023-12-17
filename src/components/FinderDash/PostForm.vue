<template>
  <q-layout view="lHh lpR lFf">
    <LeftBarf />

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="green" icon="chevron_left" label="Back" to="/finderdashf" />
      </div>

      <q-card class="q-mx-md q-pa-md" bordered>
        <div class="q-pa-md q-mx-md">
        <q-form @submi.prevent="addPosts()" @reset="onReset" class="q-gutter-md">
          <div class="row">
          
            <div class="col-6">
            
              <q-input
                v-model="postTitle"
                label="Post title"
                placeholder="Describe shortly what you need"
                hint="mandatory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="postDescription"
                label="Post description"
                placeholder="give short description that you want"
                hint="mandotory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="abandonsName"
                label="Abandons name"
                placeholder="add abandon people name here"
                hint="mandotory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="age"
                label="Age"
                placeholder="add age here"
                hint="mandatory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="address"
                label="Address"
                placeholder="add address here"
                hint="if have any address add it here"
                :dense="dense"
                style="max-width: 300px"
              />
            
            </div>

            <div class="col-6">
            
              <q-input
                v-model="contactNumber"
                label="Contact number"
                placeholder="add contact number here"
                hint="add guardian contact number"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="ph7"
                label="Email Address"
                placeholder="add email here"
                hint="Add guardian email here"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                bottom-slots
                v-model="location"
                label="Location"
                counter
                :dense="dense"
                style="max-width: 300px; margin-bottom: 20px"
              >
                <template v-slot:prepend>
                  <q-icon name="place" />
                </template>
                <template v-slot:append>
                  <q-icon
                    
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                </template>

                <template v-slot:hint> add nearest town here </template>
              </q-input>

              <!-- <q-input
                @update:model-value="
                  (val) => {
                    files = val;
                  }
                "
                multiple
                filled
                type="file"
                hint="Add abandons photo here"
                style="max-width: 300px; margin-bottom: 20px"
              /> -->
              <q-input
                bottom-slots
                v-model="photo"
                label="Add abandons photo here"
                counter
                :dense="dense"
                style="max-width: 300px; margin-bottom: 20px"
              />
              <q-input
                v-model="otherDetails"
                filled
                clearable
                type="textarea"
                color="green-1"
                label="Other details"
                hint="Add detailed description about the abandons people here"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
              />
            
            </div>

            <div class="row">
              <div
                class="col-6"
                style="margin-left: -20px; margin-bottom: 10px"
              >
                <q-toggle
                  v-model="accept"
                  label="I accept the license and terms"
                />
              </div>

              <div class="col-6" style="margin-left: 20px">
                <q-btn
                  label="Submit"
                  type="submit"
                  color="green"
                />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="green"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </div>
            
          </div>
          </q-form>
        </div>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftBarf from "./LeftBarf.vue";
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  components: {
    LeftBarf,
  },
  data(){
  return {
    abandonsName:'',
    address:'',
    age:'',
    contactNumber:'',
    location:'',
    otherDetails:'',
    photo:'',
    postDescription:'',
    postTitle:'',
  }
},
methods:{
 async addPosts(){
    const newPost={
      abandonsName:this.abandonsName,
      address: this.address,
      age: this.age,
      contactNumber:this.contactNumber,
      location:this.location,
      otherDetails: this.otherDetails,
      photo: this.photo,
      postDescription:this.postDescription,
      postTitle:this.postTitle,
    }
    
   
      axios({
        method: "post",
        url: `http://localhost:8081/posts/create`,
        data: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
         Swal.fire({
          text:"Post has been Submitted",
          icon:"success",
         })
         this.$router.push({ name: "NotificationPage" });
       
        })
        .catch((err) => {
          console.log(err);
        });
    
  }
}
};
</script>
