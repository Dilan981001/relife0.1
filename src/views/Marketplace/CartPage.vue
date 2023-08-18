<template>
  <div class="q-pa-md row justify-center item-center">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <q-table
        dense
        title="View Cart"
        :rows="cartItems"
        :columns="columns"
        :editable="true"
        row-key="name"
      >
        <template v-slot:body-cell-image="props">
          <img
            class="q-mt-md"
            :src="props.row.product.imageURL"
            style="width: 50px; height: 50px"
            alt="Custom Image"
          />
        </template>
        <template v-slot:body-cell-delete="props">
          <q-btn
            class="q-mb-lg"
            icon="delete"
            round
            dense
            color="negative"
            @click="deleteRow(props.row.id)"
          />
        </template>
        <template v-slot:body-cell-count="props">
          <q-td key="name" :props="props">
            {{ props.row.quantity }}
            <q-popup-edit v-model="props.row.quantity" v-slot="scope">
              <q-input
                v-model.number="scope.value"
                dense
                autofocus
                type="number"
                @keyup.enter="scope.set()"
                min="1"
                max="10"
              />
            </q-popup-edit>
          </q-td>
        </template>
      </q-table>

      <q-card class="my-card text-black q-mt-lg">
        <q-card-section class="row justify-evenly">
          <div class="text-h6">Total Quantity : {{ cartTotalCountState }}</div>
          <div class="text-h6">Grand Total : Rs {{ totalcost }}</div>
          <q-btn class="q-mb-lg" label="Confirm Order" dense color="blue" />
        </q-card-section>
      </q-card>
    </div>
    {{ product }}
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      cartItems:[],
      token:null,
      totalcost:0,
      columns: [
        {
          name: "id",
          required: true,
          label: "id",
          align: "left",
          field: (row) => row.product.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "title",
          align: "left",
          label: "Item",
          field: (row) => row.product.name,
          editable: true,
        },
        { name: "image", align: "left", label: "", field: "thumbnail" },
        {
          name: "count",
          label: "Quantity",
          field: "quantity",
          align: "left",
          editable: true,
          formatter: (val) => parseInt(val),
        },
        { name: "price", label: "Price/Item",  field: (row) => row.product.price, align: "left" },
        { name: "Total", label: "Total",  field: (row) => row.product.price*row.quantity, align: "left" },
        { name: "delete", label: "", field: "delete", align: "left" },
      ],
    }
  },
  methods:{
    listCartItems(){
      axios.get(`https://limitless-lake-55070.herokuapp.com/cart/?token=${this.token}`)
      .then(res=>{
        const result = res.data;
        this.cartItems=result.cartItems;
        this.totalcost=result.totalCost;
      }).catch(err=>{
        console.log(err);
      })
    },
    deleteRow(itemId){
        axios.delete(`https://limitless-lake-55070.herokuapp.com/cart/delete/${itemId}/?token=${this.token}`)
        .then(res=>{
          if(res.status==200){
            this.$router.go(0);
          }
        })
        .catch(err=>{
          console.log(err);
        })
    }
  },
  mounted(){
  //this.getProducts();
  this.token = localStorage.getItem("token")
  this.listCartItems();
}
}

// import { mapGetters, mapMutations } from "vuex";

// export default {
//   name: "CartPage",
//   data() {
//     return {
//       allItems: [],
//       columns: [
//         {
//           name: "id",
//           required: true,
//           label: "ProductID",
//           align: "left",
//           field: (row) => row.id,
//           format: (val) => `${val}`,
//           sortable: true,
//         },
//         {
//           name: "title",
//           align: "left",
//           label: "Item",
//           field: "name",
//           editable: true,
//         },
//         { name: "image", align: "left", label: "", field: "thumbnail" },
//         {
//           name: "count",
//           label: "Quantity",
//           field: "count",
//           align: "left",
//           editable: true,
//           formatter: (val) => parseInt(val),
//         },
//         { name: "price", label: "Price/Item", field: "price", align: "left" },
//         { name: "delete", label: "", field: "delete", align: "left" },
//       ],
//     };
//   },
//   created() {
//     this.allItems = this.cartProductState;
//   },
//   computed: mapGetters({
//     cartTotalCountState: "getCartTotalCount",
//     cartTotalPriceState: "getTotalPrice",
//     cartProductState: "getCartState",
//   }),
//   methods: {
//     ...mapMutations("cartModule", ["DEL_ITEM"]),
//     deleteRow(id) {
//       this.DEL_ITEM(id);
//     },
//   },
// };
</script>
