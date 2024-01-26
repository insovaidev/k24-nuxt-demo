<template>
    <div class="main-category sub-category">
        <NuxtLink :to="'/c-' + item.slug" class="card-link" v-for="item in listSubCategory" :key="item.id">
            <Category :item="item" />
        </NuxtLink>
    </div>
</template>

<script setup>
import axios from 'axios'

const route = useRoute()
const subCategory = await axios.get(`https://api.khmer24.com/v1.0/categories?parent=${route.params.slug}&lang=en&v=1`)
const listSubCategory = subCategory.data.data

</script>

<style scoped>



</style>



<!--  
    
 -->