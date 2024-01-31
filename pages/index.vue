<template>
    <div class="home">    
        <!-- <AppHeader />   -->


            <TestModal />
            <!-- <FilterLocation /> -->
            <!-- <FilterSort /> -->
  
        <!-- <FilterModal /> -->
        
        
        <!-- <AppHeaderSearch />
        
        -->
            <!-- <SearchResult />  -->

        <!-- <div class="main-category">
            <NuxtLink :to="localePath('/c-'+item.slug)" class="card-link" v-for="item in mainCategory" :key="item.id">
                <Category :item="item" />
            </NuxtLink>
        </div>

        <div class="main-post" >
            <NuxtLink to="/" class="card-link">
                <CardSale  />
            </NuxtLink>
            <NuxtLink to="/" class="card-link" v-for="item in allPost" :key="item.id">
                <Card :item="item" />
            </NuxtLink>
            <VueEternalLoading :load="load"></VueEternalLoading>
        </div> -->

        
    </div>
</template>

<script setup>

import { VueEternalLoading } from '@ts-pro/vue-eternal-loading';

const { locale } = useI18n()

const localePath = useLocalePath()


const getMainCategory  = await $fetch(`https://api.khmer24.com/v1.0/categories?parent=0&lang=${locale}&v=1`)

const mainCategory = getMainCategory.data

const pageSize = ref(0);
const allPost = useState('allPost',()=>[]);

function load({ loaded }){
    $fetch('https://api.khmer24.com/v1.0/feed?lang=en',{
        params: {
            offset: pageSize.value,
            fields: 'thumbnail,photos,location,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment,condition,highlight_specs'
        }
    }).then(res=>{
        pageSize.value = res.limit
        if(res.data){
            allPost.value = allPost.value.concat(res.data)
        }
        loaded(allPost.value.length, pageSize.value);
    })
}

const locations = await $fetch(`https://api.khmer24.com/v1.0/locations?type=province&lang=${locale}`)

const saveToLocalStorage  = () => {
    localStorage.setItem('locations', JSON.stringify(locations))
}

onMounted(()=>{
    if(process.client){
        saveToLocalStorage()
        // console.log(locale.value)
    }
})

</script>
<style scoped>

</style>

