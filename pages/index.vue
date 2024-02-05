<template>
    <!-- <div class="home">     -->

         <!-- <FooterDefualt /> -->
         <!-- <FooterChat /> -->

        <!-- <DetailPost /> -->
            <!-- <TestModal /> -->
            <!-- <FilterLocation /> -->
            <!-- <FilterSort /> -->

            <!-- <FilterPrice /> -->
        <!-- <FilterModal /> -->
        
        
        <!-- <AppHeaderSearch /> -->
        
        <!-- <AppHeaderFilter /> -->

            <!-- <SearchResult />  -->

        <AppHeader />  
        <div class="main-category">
            <NuxtLink :to="localePath('/c-'+item.slug)" class="card-link" v-for="item in mainCategories.data" :key="item.id">
                <Category :item="item" />
            </NuxtLink>
        </div>
  
        <div class="main-post" >
            <!-- <NuxtLink to="/" class="card-link">
                <CardSale  />
            </NuxtLink> -->
            <NuxtLink :to="localePath({ name: 'title-adid-id', params: { title: cleanText(item.data.title), id: item.data.id }})" class="card-link" v-for="item in allPost" :key="item.id">
                <Card :item="item" />
            </NuxtLink>
            <VueEternalLoading :load="load"></VueEternalLoading>    
        </div> 
    <!-- </div> -->
</template>

<script setup>
import { VueEternalLoading } from '@ts-pro/vue-eternal-loading';

const { locale } = useI18n()
const localePath = useLocalePath()
const pageSize = ref(0);
const allPost = useState('allPost', () => [] );


const { data : mainCategories, error } = await useFetch(`https://api.khmer24.com/v1.0/categories?parent=0&lang=${locale}&v=1`)

// Load more data
function load({ loaded }){  
    $fetch('https://api.khmer24.com/v1.0/feed',{
        params: {
            lang: locale.value,
            offset: pageSize.value,
            fields: 'thumbnail,photos,location,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment,condition,highlight_specs',
            functions: 'save,chat,like,comment,apply_job,shipping,banner,highlight_ads[highlight_specs],highlight_ads[object_highlight_specs]'
        }

    }).then(res=>{
        pageSize.value = res.limit
        if(res.data){
            allPost.value.push(...res.data)
        }
        loaded(allPost.value.length, pageSize.value);
    })
}

// Get location
$fetch(`https://api.khmer24.com/v1.0/locations?type=province&lang=${locale}`)
    .then((res) => {
        if(res && res.data) {
            localStorage.setItem('locations', JSON.stringify(res))
        }
    }).catch(error => console.log(error))

onMounted(()=>{
    if(process.client){
       
    }
})




</script>
<style scoped>

</style>

