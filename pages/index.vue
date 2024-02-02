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
            <NuxtLink :to="localePath('/c-'+item.slug)" class="card-link" v-for="item in mainCategory" :key="item.id">
                <Category :item="item" />
            </NuxtLink>
        </div>
  
        <div class="main-post" >
            <NuxtLink to="/" class="card-link">
                <CardSale  />
            </NuxtLink>
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

const mc = ref([])

const getMainCategory  = await $fetch(`https://api.khmer24.com/v1.0/categories?parent=0&lang=${locale}&v=1`)
// const mainCategory = getMainCategory.data    

const pageSize = ref(0);

const allPost = useState('allPost', () => [] );

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

const locations = await $fetch(`https://api.khmer24.com/v1.0/locations?type=province&lang=${locale}`)

const saveToLocalStorage  = () => {
    localStorage.setItem('locations', JSON.stringify(locations))
}

const categories = await useFetch(`https://api.khmer24.com/v1.0/categories?parent=0&lang=${locale}&v=1`)
const mainCategory = getMainCategory.data


// async function test() {
//     try {
//         const {data: c, error } = await useFetch('https://api.khmer24.com/v1.0/categories?parent=0&lang=kh&v=1')
//         if(c) console.log('categories', c.value)
//         if(error) console.log('error', error.value)
//     } catch (error) {
//         console.log('errorCache', error)
//     }
// } 

async function test() {
        const {data: c, error } = await useFetch('https://api.khmer24.com/v1.0/categories?parent=0&lang=kh&v=1')
        if(c) console.log('categories', c.value)
        if(error) console.log('error', error)
} 


test()

onMounted(()=>{
    if(process.client){
        saveToLocalStorage()
        // console.log(categories)

    //     $fetch(`https://api.khmer24.com/v1.0/categories?lang=en&v=1`)
    //    .then((res) => {
    //         // Store all Categories to local storage
    //         localStorage.setItem('categories', JSON.stringify(res))
    //         const allCetegoryData = localStorage.getItem('categories')
    //         if(allCetegoryData) {
    //             const d = JSON.parse(allCetegoryData).data
    //             if(d) {
    //                 d.forEach(m => {
    //                     if(m.parent == '0') mc.value.push({...m})
    //                 });
    //             }
    //         }   
    //    })  
    }
})

</script>
<style scoped>

</style>

