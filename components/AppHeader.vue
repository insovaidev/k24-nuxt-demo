<template>
   <div class="container">
        <button @click="swichLang()" >
            <div  :class="[lang == 'en' ? 'en-flage' : 'kh-flage']"></div>
        </button>
        <div class="title"><a href="/en">{{ $t('message.khmer24') }}</a></div> 

        <!-- <NuxtLink :to="switchLocalePath('en')">English</NuxtLink> -->

        <button class="search">
            <Icon  class="search-icon" icon="iconamoon:search" />
        </button>
    </div>

    <!-- <div> -->
      <!-- {{ $t('message.khmer24') }}
      <NuxtLink class="btn btn-link" :to="switchLocalePath(locale === 'en' ? 'km' : 'en')">
        Language
      </NuxtLink> -->
  
    <!-- </div> -->
</template>


<script setup lang="js">

import '~/assets/css/header.css'


// const { locale } = useI18n()
// //   const switchLocalePath = useSwitchLocalePath()
//   onMounted(()=>{
//     if(process.client){
//       console.log(locale.value)
//     }
//   })
  



const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()



const lang = ref('en')
// locale.value = 'en'  

function swichLang() {
    const getLang = localStorage.getItem('lang');
    lang.value = getLang
    if(locale.value=='en') {
        switchLocalePath('km')
        localStorage.setItem('lang', 'km')
    }
    if(locale.value=='km') {
        switchLocalePath('en')
        localStorage.setItem('lang', 'en')
    }

    // console.log(locale.value)
        
}

onMounted(() => {
    const getLang = localStorage.getItem('lang');
    lang.value = getLang
    locale.value = getLang
})


</script>

<style scoped>

button {
    object-fit: cover;
    width: 50px; 
    height: 30px;
}

.kh-flage {
    width: 100%;
    height: 100%;
    background-image: url("C:/k24/nuxt-demo/assets/img/icons/kh-flag.webp");
    background-repeat: no-repeat;
    background-size: cover;
}

.en-flage {
    width: 100%;
    height: 100%;
    background-image: url("C:/k24/nuxt-demo/assets/img/icons/uk-flag.webp");
    background-repeat: no-repeat;
    background-size: cover;
}


.container {
    padding: 0 15px;
    height: 50px;
    width: 100%;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: var(--pr-color); */
}

.title a {
    text-decoration: none;
    font-size: 32px;
    color: rgb(0, 0, 0);
}

.search {
    outline: none;
    border: none;
    background-color: transparent;
}


.search-icon {
    font-size: 24px; 
    background-color: transparent;
}
</style>