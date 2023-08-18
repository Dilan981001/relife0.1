<template>
<div class="row justify-end q-mt-lg q-mr-md">
    
    <q-btn label="Add Product" to="/admin/product/new" color="blue" dense/>
</div>
<div class="container row justify-center q-pt-lg q-mt-lg ">
    
    <ProductBox />

</div>

</template>


<script>
import ProductBox from '@/components/Marketplace/ProductBox.vue';
export default{
    components:{
        ProductBox
    }
}

</script>

<style scoped>


.container{

margin-top: 0;
}
</style>