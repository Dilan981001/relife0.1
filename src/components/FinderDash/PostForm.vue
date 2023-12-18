<template>
  <q-layout view="lHh lpR lFf">
    <LeftBarf />

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="green" icon="chevron_left" label="Back" to="/finderdashf" />
      </div>

      <q-card class="q-mx-md q-pa-md" bordered>
        <div class="q-pa-md q-mx-md">
          <div class="row">
            <div class="col-6">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                v-model="ph1"
                label="Post title"
                placeholder="Describe shortly what you need"
                hint="mandatory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="ph2"
                label="Post description"
                placeholder="give short description that you want"
                hint="mandotory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="ph3"
                label="Abandons name"
                placeholder="add abandon people name here"
                hint="mandotory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="ph"
                label="Age"
                placeholder="add age here"
                hint="mandatory"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="ph"
                label="Address"
                placeholder="add address here"
                hint="if have any address add it here"
                :dense="dense"
                style="max-width: 300px"
              />
            </q-form>
            </div>

            <div class="col-6">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                v-model="ph"
                label="Contact number"
                placeholder="add contact number here"
                hint="add guardian contact number"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                v-model="ph"
                label="Email Address"
                placeholder="add email here"
                hint="Add guardian email here"
                :dense="dense"
                style="max-width: 300px"
              />

              <q-input
                bottom-slots
                v-model="text"
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
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                </template>

                <template v-slot:hint> add nearest town here </template>
              </q-input>

              <q-input
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
              />

              <q-input
                v-model="textareaModel"
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
            </q-form>
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
                  to="/finderdashf"
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
        </div>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import LeftBarf from "./LeftBarf.vue";

export default {
  components: {
    LeftBarf,
  },
  setup() {
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      file: ref(null),
      files: ref(null),
    };
  },
};
</script>
