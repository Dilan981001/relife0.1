<template>
     <div class="q-mt-md">
        <div class="row row1 no-wrap">
          <div>
            <h5 class="text-white text-center">CHOOSE PRODUCTS</h5>
          </div>
        </div>
        <div class="row row1 text-white text-weight-bold">
          <q-list class="row desktop-only">
            <q-item>
              <q-item-label>ALL</q-item-label>
            </q-item>
            <q-item> <q-item-label>ON SALE</q-item-label></q-item>

            <q-item><q-item-label>TRENDING NOW</q-item-label></q-item>
            <q-item> <q-item-label>NEW ARRIVAL</q-item-label></q-item>
          </q-list>
          <q-list class="row q-mt-sm q-mb-sm no-wrap text-center mobile-only">
            <q-item>
              <q-item-label>ALL</q-item-label>
            </q-item>
            <q-item> <q-item-label>ON SALE</q-item-label></q-item>

            <q-item><q-item-label>TRENDING NOW</q-item-label></q-item>
            <q-item> <q-item-label>NEW ARRIVAL</q-item-label></q-item>
          </q-list>
        </div>
        <div class="row desktop-only row2">
          <div class="col greenbox ">
            <div>
              <h6 class="sort-text">SORT BY :</h6>
            </div>
            <div class="sort">
              <q-select
                class="text-black"
                label="Select"
                v-model="model"
                :options="options"
                dense
                color="black"
                label-color="black"
              />
            </div>
          </div>

          <div class="col col-input">
            <SearchBox />
            <div class="extra-div"></div>
          </div>
        </div>
        <div class=" mobile-only ">
          <div class="row justify-evenly q-mb-md">
            <div>
              <h6 class="">SORT BY :</h6>
            </div>
            <div class="sort" >
              <q-select
                class="text-black bg-white"
                label="Select"
                v-model="model"
                :options="options"
                dense
                color="black"
                label-color="black"
              />
            </div>
          </div>

          <div class="search text-center">
            <SearchBox />
          </div>
        </div>
      </div>

</template>

<script>
import SearchBox from "./SearchBox.vue";
import { ref } from "vue";

export default{
    name :'ProductFilter',
    components : {
        SearchBox,
    },
    setup() {
    return {
      model: ref(null),
      options: [
        "Popularity",
        "Price Low to hign",
        "Price high to low",
        "Rating",
        "Orders",
      ],
    };
  },
}

</script>

<style scoped>
.row1 {
  display: flex;
  justify-content: center;
}
.row2 {
  margin: 0;
  display: flex;
}
.col-title {
  margin-left: 0 auto;
}
.col-1 {
  justify-content: center;
}

.greenbox {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.sort-text {
  color: white;
  margin: 0 10px 0 auto;
}
.sort {
  width: 50%;
  background-color: white;
}

.col-input {
  display: flex;
  justify-content: center;
}
.search{
  width:75%;
  text-align: center;
  margin: 0 auto;
}
</style>