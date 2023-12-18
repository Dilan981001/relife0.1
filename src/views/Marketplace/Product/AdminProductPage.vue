<template>
<div class="row">
 <NavBar/>
</div>

<div class="row justify-end q-mt-lg q-mr-md">
    
    <q-btn label="Add Product" to="/admin/product/new" color="blue" dense/>
</div>
<div class="container row justify-center q-pt-lg q-mt-lg ">
    
    <ProductBox />

</div>

</template>


<script>
import ProductBox from '@/components/Marketplace/ProductBox.vue';
import NavBar from "@/components/Marketplace/NavBar.vue";

export default {
    components:{
        ProductBox,
        NavBar
    }
}

</script>

<style scoped>


.container{

margin-top: 0;
}
</style>