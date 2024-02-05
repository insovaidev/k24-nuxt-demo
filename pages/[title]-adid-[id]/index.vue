<template>
    <div>
        <!-- Header Detail Page -->
        <div class="detail-header">
            <button @click="$router.back()" class="detail-header-back-icon">
                <Icon icon="ion:arrow-back" />
            </button>

            <div class="detail-header-title"><a href="/" class="t-white">{{ $t('message.khmer24') }}</a></div>

            <div class="detail-header-actions t-white">
                <Icon icon="material-symbols:bookmark-outline" />
                <Icon icon="oi:share" />
            </div>
        </div>

        <!-- Post Detail Page -->

        <div v-if="post">
            <FancyBox :options="{
                Carousel: {
                    infinite: false,
                },
            }">
                <div class="detail-thumnail-wrapper" :style="{ 'background-image': 'url(' + post.photo + ')' }">
                    <div class="detail-bg-filter"></div>
                    <div class="detail-big-thumnail">
                        <a data-fancybox="gallery" :href="post.photo">
                            <img :src="post.photo" alt="" />
                        </a>
                    </div>
                </div>
                
                <div v-if="post.photos" id="gallery-wrap" class="detail-small-thumnail">
                    <div class="detail-small-thumnail-wrapper">
                        <a v-for="item in post.photos" data-fancybox="gallery" :href="item">
                        <img :src="item" />
                        </a>

                        <div class="detail-blur-count-thumnail" :class="[post.photos.length > 3 ? 'active' : '']"
                            data-fancybox="gallery" :href="post.photos[0]">
                            {{ post.photos.length - 3 }} +
                        </div>
                    </div>
                    

                </div>
            </FancyBox>

           <div class="detail-description">
                <p class="detail-description-title">{{ post.title }}</p>
                <p class="detail-sub-title">
                    <span class="">Phnom Penh</span>
                    <span class="dot"></span>
                    <span >1h</span>
                </p>
                <h3 class="price">$1, 200</h3>
            </div>
            

            <div class="safety-wapper">
                <div class="safety-title-wrapper">
                    <img src="/warranty.webp" alt="" width="24" height="24" />
                    <div class="safety-title t-red">
                        <p>ព័ត៌មានសុវត្ថិភាពសម្រាប់អ្នកទិញ</p>
                        <p>Safety Tips for Buyers</p>
                    </div>
                </div>

                <div class="list-safety">
                    <li>
                        <p>1.</p>
                        <div class="safety-detail">
                            <p>មិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុន មុនពេលទទួលទំនិញ</p>
                            <p>Do note sent money before receiving the goods</p>
                        </div>
                    </li>
                    <li>
                        <p>2.</p>
                        <div class="safety-detail">
                            <p>មិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុន មុនពេលទទួលទំនិញ</p>
                            <p>Do note sent money before receiving the goods</p>
                        </div>
                    </li>
                    <li>
                        <p>3.</p>
                        <div class="safety-detail">
                            <p>មិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុន មុនពេលទទួលទំនិញ</p>
                            <p>Do note sent money before receiving the goods</p>
                        </div>
                    </li>
                </div>

            </div>

            <div class="detail-description-wrapper ">
                <h3>{{ $t('message.description') }}</h3>

                <p>ID: {{ post.id }}</p>
                <p v-for="i in post.specs">{{ i.title }} : {{ i.display_value }}</p>
  
                <div class="detail-description">
                    <p :key='i' v-for="i in des" v-html="checkAddTage(i)"></p>
                </div>
                <!-- <div class="contact">
                    <p><span>ព័ត៌មានទំនាក់ទំនង:</span>សូមកុំភ្លេចនិយាយថាអ្នកបានឃើញការផ្សព្វផ្សាយនេះនៅលើ ខ្មែរ២៤។</p>
                </div>
                <div class="phone-number">
                    <a href=""> <img src="" alt="" /> 0968111xxx ចុចដើម្បីតេ</a>
                </div> -->
            </div>


             <!-- 
                <div v-if="relatePost" class="main-post">
                    <NuxtLink
                        :to="localePath({ name: 'title-adid-id', params: { title: cleanText(item.data.title), id: item.data.id } })"
                        class="card-link" v-for="item in relatePost" :key="item.id">
                        <Card :item="item" />
                    </NuxtLink>
                </div>         
            -->
            <!-- <FooterChat :like="post.total_like ? post.total_like : 0" /> -->

        </div>

    </div>
</template>

<script setup>
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()
const post = ref(null)
const des = ref([])
const pending = ref(false)
const relatePost = ref(null)

const getPost = () => {
    pending.value = true
    $fetch(`/feed/${route.params.id}`, {
        method: 'GET',
        baseURL: 'https://api-posts.khmer24.com',
        params: {
            lang: locale.value,
            fields: 'photo,photos,thumbnails,thumbnail,renew_date,posted_date,link,highlight_specs,specs,description,category,views,total_like,total_comment,location,user,store,phone',
            functions: 'save,chat,like,comment,apply_job,shipping'
        }
    }).then((res) => {
        post.value = res.data
        if(post.value.description) des.value = post.value.description.split('\n')

        console.log(des.value)
        pending.value = false
    });
}

const getRelatePost = () => {
    $fetch(`/feed/${route.params.id}/relates`, {
        method: 'GET',
        baseURL: 'https://api-posts.khmer24.com',
        params: {
            lang: locale.value,
            fields: 'thumbnail,photos,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment'
        }
    }).then(res => {
        if (res.data) {
            relatePost.value = res.data
            console.log(relatePost.value)
        }
    })

}


// const des = desData.split("\n")


getPost()
getRelatePost()

function checkAddTage(testString) {
    let s = testString
    let filters = store_regex()
    let phoneReg = new RegExp(filters.join("|"), 'gi')
    const a = testString.split('|')
    const urlReg = /https?:\/\/[^\s]+/

    a.forEach(v => {
        if(v.match(phoneReg)) {
            const av = v.split('/') 
            av.forEach(i => {
                s = s.replace(i.match(phoneReg)[0], `<a href='tel: ${i.match(phoneReg)[0]}'>${i.match(phoneReg)[0]}</a>`)
            })
        } 
        if(v.match(urlReg)) {
            s = s.replace(v.match(urlReg)[0], `<a href='/'>${v.match(urlReg)[0]}</a>`)
        }
    });

    return s
}


// function checkAddTage(testString) {

//     console.log(testString)


//     let s = testString
//     let filters = store_regex()
//     let phoneReg = new RegExp(filters.join("|"), 'gi')

//     const a = testString.split(/[|]/)

//     const urlReg = /https?:\/\/[^\s]+/

//     a.forEach(v => {
//         console.log(v)

//         if(v.match(phoneReg)) {
//             // console.log('match', v.match(phoneReg)[0])
//             s = s.replace(v.match(phoneReg)[0], `<a href='tel: ${v.match(phoneReg)[0]}'>${v.match(phoneReg)[0]}</a>`)
//         } 
//         if(v.match(urlReg)) {
//             s = s.replace(v.match(urlReg)[0], `<a href='/'>${v.match(urlReg)[0]}</a>`)
//         }
//     });

//     return s
// }



function store_regex() {
        let filters = [];

        filters.push('([0]{1}[0-9]{9})'); // 0123456789
        filters.push('([0-9]{3}[-. ][+][1-9]{12})'); // +855123456789

        filters.push('([0]{1}[0-9]{8})'); // 012345678
        filters.push('([+][1-9]{11})'); // +85512345678

        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{4})'); // 012 345 6789
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{4})'); // +85512 345 6789


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{3})'); // 012 345 678
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{3})'); // +85512 345 678


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{4})'); // 012 34 5678
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{4})'); // +85512 34 5678


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{4}[-. ]{1,2}[0-9]{2,3})'); // 012 3456 78
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{4}[-. ]{1,2}[0-9]{2,3})'); // +85512 3456 78


        filters.push('([0-9]{3}[-][0-9]{3}[-][0-9]{4})'); // 012-345-6789
        filters.push('([0-9]{3}[.][0-9]{3}[.][0-9]{4})'); // 012.345.6789
        filters.push('([+][1-9]{5}[-][0-9]{3}[-][0-9]{4})'); // +85512-345-6789
        filters.push('([+][1-9]{5}[.][0-9]{3}[.][0-9]{4})'); // +85512.345.6789


        filters.push('([0-9]{3}[-][0-9]{3}[-][0-9]{3})'); // 012-345-678
        filters.push('([0-9]{3}[.][0-9]{3}[.][0-9]{3})'); // 012-345-678
        filters.push('([+][1-9]{5}[-][0-9]{3}[-][0-9]{3})'); // +85512-345-678
        filters.push('([+][1-9]{5}[.][0-9]{3}[.][0-9]{3})'); // +85512-345-678


        filters.push('([0-9]{3}[-][0-9]{7})'); // 012-3456789
        filters.push('([+][1-9]{5}[-][0-9]{7})'); // +85512-3456789


        filters.push('([0-9]{3}[-][0-9]{6})'); // 012-345678
        filters.push('([+][1-9]{5}[-][0-9]{6})'); // +85512-345678


        filters.push('([0-9]{3}[ ]{1,2}[0-9]{7,8})'); // 012 3456789
        filters.push('([+][1-9]{5}[ ]{1,2}[0-9]{7,8})'); // +85512 3456789
        filters.push('([1-9]{5}[ ]{1,2}[0-9]{7,8})'); // 85512 3456789


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{6})'); // 012 345678
        filters.push('([0-9]{6}[-. ]{1,2}[0-9]{3})'); // 012345 678
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{6})'); // +85512 345678
        filters.push('([+][1-9]{3}[-. ]{1,2}[0-9]{9})'); // +855 123456789
        filters.push('([+][1-9]{3}[-. ]{1,2}[0-9]{8})'); // +855 12345678
        filters.push('([1-9]{5}[-. ]{1,2}[0-9]{6})'); // 85512 345678


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{3})'); // 012 34 56 789
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{3})'); // +85512 34 56 789


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{2})'); // 012 34 567 89
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{2})'); // +85512 34 567 89


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2})'); // 012 345 67 89
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{3}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2})'); // +85512 345 67 89


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2})'); // 012 34 56 78
        filters.push('([+][1-9]{5}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2}[-. ]{1,2}[0-9]{2})'); // +85512 34 56 78


        filters.push('([0-9]{3}[-. ]{1,2}[0-9]{1,6}[-. ]{1,2}[0-9]{1,6}[-. ]{1,2}[0-9]{1,6})'); // 012 34 56 78

        // email
        // filters.push('([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,6})');   // check true but if string next to .com it get all all string
        // filters.push('([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3}))');   // this regex get only email, but error on string have "w" a lot
        // filters.push('([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]{3})'); // this work for email and not error
        // filters.push('([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,})'); // this regex get only email

        // link
        // filters.push('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})');

        return filters;
    }








onMounted(() => {
    if (process.client) {
        Fancybox.bind("[data-fancybox]", {
        });

    }
})

</script>

<style scoped>

.detail-description {
    white-space: break-spaces;
    word-break: break-word;
    line-height: 2;
}


.safety-wapper {
    padding: 8px 12px;
    background-color: #fffbf6;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    padding-bottom: 32px;
}
.safety-title-wrapper {
    justify-content: center;
    display: flex;
    column-gap: 16px;
    align-items: center;
    width: 100%;
}

.safety-title-wrapper > img {
    width: 24px;
}
.safety-title {

}

.list-safety > li {
    display: flex;
    column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    font-weight: 300;
}


/* 


.safety-wrapper > .title {
    
}

.safty-info>.title>.safety-detail {
    font-size: 16px;
}



.dot {
    height: 3px !important;
    width: 3px !important;
    background-color: gray;
    border-radius: 50%;
}

.detail {
    padding: 0 16px;
    margin: 10px 0;
}

.detail-main-title {
    font-size: 24px;
    margin: 10px 0;

}


.detail>.sub-title {
    display: flex;
    column-gap: 5px;
    align-items: center;
    margin: 10px 0;
}



*/




</style>
