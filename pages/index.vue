<template>
    <div class="home">

        <div class="main-category">
            <NuxtLink :to="'/c-'+item.slug" class="card-link" v-for="item in listMainCategory" :key="item.id">
                <Category :item="item" />
            </NuxtLink>
        </div>


        <!-- <div class="main-post" >
            <NuxtLink to="/" class="card-link">
                <CardSale  />
            </NuxtLink>
            <NuxtLink to="/" class="card-link" v-for="item in post" :key="item.id">
                <Card :item="item" />
            </NuxtLink>
        </div> -->
    </div>
</template>

<script setup>
import axios from 'axios'

const post = ref(null)

const mainCategory  = await axios.get('https://api.khmer24.com/v1.0/categories?parent=0&lang=en&v=1')
const listMainCategory = mainCategory.data.data



onMounted( async () => {

    
    
    
    
    // mainCategory.value = mainCategoryGet.data
    // console.log(mainCategoryGet.data)
    
    // category.value = [
    //     {
    //         "id": "49",
    //         "en_name": "Cars and Vehicles",
    //         "km_name": "រថយន្ត និង យានយន្ត",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/23-01-17/cars-and-vehicles-1673926803.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/23-01-17/m-cars-and-vehicles-1673926803.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/23-01-17/l-cars-and-vehicles-1673926803.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "cars-and-vehicles",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "162",
    //         "en_name": "Phones & Tablets",
    //         "km_name": "ទូរស័ព្ទ និង Tablets",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/mobile-phones-tablets-1638848154.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-mobile-phones-tablets-1638848154.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-mobile-phones-tablets-1638848154.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "mobile-phones-tablets",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "163",
    //         "en_name": "Computers & Accessories",
    //         "km_name": "កុំព្យូទ័រ និង គ្រឿងបន្លាស់",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/computer-and-accessories-1638848160.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-computer-and-accessories-1638848160.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-computer-and-accessories-1638848160.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-computer-and-accessories-1638848160.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "computer-and-accessories",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "164",
    //         "en_name": "Electronics & Appliances",
    //         "km_name": "អេឡិចត្រូនិច និង គ្រឿង​ប្រើប្រាស់",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/electronics-appliances-1638848165.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-electronics-appliances-1638848165.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-electronics-appliances-1638848165.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-electronics-appliances-1638848165.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "electronics-appliances",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "48",
    //         "en_name": "House & Lands",
    //         "km_name": "ផ្ទះ និង ដី",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/23-09-21/property-housing-rentals-1695265714.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/23-09-21/s-property-housing-rentals-1695265714.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/23-09-21/m-property-housing-rentals-1695265714.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/23-09-21/l-property-housing-rentals-1695265714.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "property-housing-rentals",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "2",
    //         "en_name": "Jobs",
    //         "km_name": "ការងារ",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/jobs-1638848186.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-jobs-1638848186.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-jobs-1638848186.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-jobs-1638848186.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "jobs",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "103",
    //         "en_name": "Services",
    //         "km_name": "សេវាកម្ម",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/services-1638848194.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-services-1638848194.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-services-1638848194.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-services-1638848194.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "services",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "167",
    //         "en_name": "Fashion & Beauty",
    //         "km_name": "សម្លៀកបំពាក់",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/fashion-beauty-1638848200.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-fashion-beauty-1638848200.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-fashion-beauty-1638848200.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-fashion-beauty-1638848200.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "fashion-beauty",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "165",
    //         "en_name": "Furniture & Decor",
    //         "km_name": "គ្រឿងសង្ហារឹម និង ដេ​គ័​រ",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/furniture-decor-1638848206.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-furniture-decor-1638848206.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-furniture-decor-1638848206.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-furniture-decor-1638848206.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "furniture-decor",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "166",
    //         "en_name": "Books, Sports & Hobbies",
    //         "km_name": "សៀវភៅ, កីឡា និង ចំណូលចិត្ត",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/books-sports-hobbies-1638848213.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-books-sports-hobbies-1638848212.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-books-sports-hobbies-1638848213.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-books-sports-hobbies-1638848213.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "books-sports-hobbies",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "173",
    //         "en_name": "Pets",
    //         "km_name": "សត្វចិញ្ចឹម",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/pets-1638848219.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-pets-1638848219.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-pets-1638848219.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-pets-1638848219.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "pets",
    //         "parent": "0",
    //         "popular": false
    //     },
    //     {
    //         "id": "174",
    //         "en_name": "Foods",
    //         "km_name": "អាហារ",
    //         "icon": {
    //             "url": "https://images.khmer24.co/categories/21-12-07/foods-1638848268.png",
    //             "width": "512",
    //             "height": "512",
    //             "small": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/s-foods-1638848268.png",
    //                 "width": "128",
    //                 "height": "128"
    //             },
    //             "medium": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/m-foods-1638848268.png",
    //                 "width": "256",
    //                 "height": "256"
    //             },
    //             "large": {
    //                 "url": "https://images.khmer24.co/categories/21-12-07/l-foods-1638848268.png",
    //                 "width": "512",
    //                 "height": "512"
    //             }
    //         },
    //         "slug": "foods",
    //         "parent": "0",
    //         "popular": false
    //     }
    // ]
  
  
    post.value = [
        {
            "type": "post",
            "data": {
                "id": "10207515",
                "title": "Customer Service Executive (Indonesian/Malaysian base in Sihanoukville)",
                "price": "800.00",
                "type": "top",
                "photos": [
                    "https://images.khmer24.co/23-12-08/customer-service-executive-indonesian-malaysian-base-in-sihanoukville--929082170202057317848138-b.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-12-08/s-customer-service-executive-indonesian-malaysian-base-in-sihanoukville--929082170202057317848138-b.jpg",
                "condition": {
                    "title": "Full-time",
                    "field": "job-type",
                    "value": "full-time"
                },
                "location": {
                    "id": "38",
                    "en_name": "Preah Sihanouk",
                    "km_name": "ព្រះសីហនុ",
                    "en_name2": "Krong Preah Sihanouk, Preah Sihanouk",
                    "km_name2": "ព្រះសីហនុ, ព្រះសីហនុ",
                    "en_name3": "Sangkat Bei, Krong Preah Sihanouk, Preah Sihanouk",
                    "km_name3": "សង្កាត់លេខ៣, ព្រះសីហនុ, ព្រះសីហនុ",
                    "slug": "preah-sihanouk",
                    "long_location": "Sangkat Bei, Krong Preah Sihanouk, Preah Sihanouk"
                },
                "category": {
                    "id": "142",
                    "en_name": "Information Technology",
                    "km_name": "ព​ត៌​មាន​វិទ្យា",
                    "slug": "jobs-information-technology",
                    "parent": "2",
                    "parent_data": {
                        "id": "2",
                        "en_name": "Jobs",
                        "km_name": "ការងារ",
                        "slug": "jobs"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Experience",
                        "field": "experience",
                        "value": "3 Year+",
                        "display_value": "3 Year+ Experience",
                        "value_slug": "3"
                    }
                ],
                "user": {
                    "id": "929082",
                    "name": "Blacksire",
                    "username": "sokheangmoun14191531",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/23-08-30/sokheangmoun14191531-20230830163839.jpg",
                        "width": "956",
                        "height": "955",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-08-30/s-sokheangmoun14191531-20230830163839.jpg",
                            "width": "61",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-08-30/m-sokheangmoun14191531-20230830163839.jpg",
                            "width": "129",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-08-30/l-sokheangmoun14191531-20230830163839.jpg",
                            "width": "201",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 19 hours ago",
                        "time": 1706092259,
                        "date": "2024-01-25 13:03:31"
                    },
                    "is_verify": false,
                    "registered_date": "2023-08-30 04:38:38",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-23 21:38:07",
                "link": "https://www.khmer24.com/post-adid-10207515",
                "short_link": "https://www.khmer24.com/post-adid-10207515"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": true,
                "enable_shipping": false
            }
        },


        {
            "type": "post",
            "data": {
                "id": "10512950",
                "title": "2017 LEXUS NX200T F-SPORT ( បួនប៊ូតុង  )",
                "price": 45500,
                "type": "top",
                "discount": {
                    "sale_price": 45500,
                    "original_price": "49500.00",
                    "amount_saved": 4000,
                    "type": "amount",
                    "discount": "4000.00"
                },
                "photos": [
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739319697334-c.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739380072946-d.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739311033735-e.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739415939337-f.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739485890360-g.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739483333368-h.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739411292408-i.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739447852528-j.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739451455156-k.jpg",
                    "https://images.khmer24.co/23-07-21/2017-lexus-nx200t-f-sport--141100168991739476655148-l.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462652111451-l.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462762906234-m.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462765109368-n.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462797935997-o.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462799886298-p.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462786213622-q.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462740231054-r.jpg",
                    "https://images.khmer24.co/24-01-25/2017-lexus-nx200t-f-sport--141100170615462744931205-s.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-07-21/s-2017-lexus-nx200t-f-sport--141100168991739319697334-c.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Tuol Kouk, Phnom Penh",
                    "km_name2": "ទួលគោក, ភ្នំពេញ",
                    "en_name3": "Tuek L'ak Bei, Tuol Kouk, Phnom Penh",
                    "km_name3": "ទឹកល្អក់ទី ៣, ទួលគោក, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuek L'ak Bei, Tuol Kouk, Phnom Penh",
                    "map": {
                        "x": "11.55994419457368",
                        "y": "104.89497721195221",
                        "z": 15
                    }
                },
                "category": {
                    "id": "67",
                    "en_name": "Cars for Sale",
                    "km_name": "រថយន្តសម្រាប់លក់",
                    "slug": "cars-for-sale",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Year",
                        "field": "car-year",
                        "value": "2017",
                        "display_value": "2017",
                        "value_slug": "2017"
                    },
                    {
                        "title": "Tax Type",
                        "field": "tax-type",
                        "value": "Tax Paper",
                        "display_value": "Tax Paper",
                        "value_slug": "tax-paper"
                    }
                ],
                "user": {
                    "id": "141100",
                    "name": "8889 Auto",
                    "username": "8889Auto",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/22-06-06/fb-8889Auto_141100_1654505245_69.jpg",
                        "width": "960",
                        "height": "960",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-06-06/s-fb-8889Auto_141100_1654505245_69.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-06-06/m-fb-8889Auto_141100_1654505245_69.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-06-06/l-fb-8889Auto_141100_1654505245_69.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 26 minutes ago",
                        "time": 1706160893,
                        "date": "2024-01-25 13:00:54"
                    },
                    "is_verify": false,
                    "registered_date": "2015-10-08 12:34:22",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 09:47:06",
                "link": "https://www.khmer24.com/post-adid-10512950",
                "short_link": "https://www.khmer24.com/post-adid-10512950"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10500962",
                "title": "Lexus RX 300 99 pong1 ម្ចាស់ដេីមទី1 ថ្នាំសុីន1ជុំ ក្នុងថ្មី បាតថ្មី ម៉ាសុីនអេម",
                "price": "8400.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525242512726-b.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525244707285-c.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525264177041-d.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525224636179-e.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525212894396-f.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525265370109-g.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525267861282-h.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525387235912-i.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525398354581-j.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525328124830-k.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525373420987-l.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525376861715-m.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525361591186-n.jpg",
                    "https://images.khmer24.co/24-01-22/lexus-rx-300-99-pong1-1-1--504031170589525484221263-o.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-22/s-lexus-rx-300-99-pong1-1-1--504031170589525242512726-b.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Ruessei Kaev, Phnom Penh",
                    "km_name2": "ឫស្សីកែវ, ភ្នំពេញ",
                    "en_name3": "Tuol Sangkae 2, Ruessei Kaev, Phnom Penh",
                    "km_name3": "ទួលសង្កែទី២, ឫស្សីកែវ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuol Sangkae 2, Ruessei Kaev, Phnom Penh",
                    "map": {
                        "x": "11.60555254916774",
                        "y": "104.89988531917334",
                        "z": 15
                    }
                },
                "category": {
                    "id": "67",
                    "en_name": "Cars for Sale",
                    "km_name": "រថយន្តសម្រាប់លក់",
                    "slug": "cars-for-sale",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Year",
                        "field": "car-year",
                        "value": "1999",
                        "display_value": "1999",
                        "value_slug": "1999"
                    },
                    {
                        "title": "Tax Type",
                        "field": "tax-type",
                        "value": "Plate Number",
                        "display_value": "Plate Number",
                        "value_slug": "plate-number"
                    }
                ],
                "user": {
                    "id": "504031",
                    "name": "NG AUTO​",
                    "username": "NG-AUTO",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/23-06-08/NG-AUTO-20230608084840.jpg",
                        "width": "960",
                        "height": "960",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-06-08/s-NG-AUTO-20230608084840.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-06-08/m-NG-AUTO-20230608084840.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-06-08/l-NG-AUTO-20230608084840.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162472",
                        "date": "2024-01-25 13:05:10"
                    },
                    "is_verify": false,
                    "registered_date": "2020-08-07 01:58:42",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:29",
                "link": "https://www.khmer24.com/post-adid-10500962",
                "short_link": "https://www.khmer24.com/post-adid-10500962"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10514047",
                "title": "សាវស្វក Oversized VIP",
                "price": 8,
                "type": "normal",
                "discount": {
                    "sale_price": 8,
                    "original_price": "12.00",
                    "amount_saved": 4,
                    "type": "amount",
                    "discount": "4.00"
                },
                "photos": [
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248169572234-b.jpg",
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248118615656-c.jpg",
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248176842064-d.jpg",
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248254633828-e.jpg",
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248238624825-f.jpg",
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248277186691-g.jpg",
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248267805466-h.jpg",
                    "https://images.khmer24.co/24-01-25/-oversized-vip-709987170616248216757095-i.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-25/s--oversized-vip-709987170616248169572234-b.jpg",
                "condition": null,
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Ruessei Kaev, Phnom Penh",
                    "km_name2": "ឫស្សីកែវ, ភ្នំពេញ",
                    "en_name3": "Tuol Sangkae 1, Ruessei Kaev, Phnom Penh",
                    "km_name3": "ទួលសង្កែទី១, ឫស្សីកែវ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuol Sangkae 1, Ruessei Kaev, Phnom Penh",
                    "map": {
                        "x": "11.59573355403718",
                        "y": "104.91417881101370",
                        "z": 15
                    }
                },
                "category": {
                    "id": "207",
                    "en_name": "Men's Fashion",
                    "km_name": "សម្លៀកបំពាក់បុរស",
                    "slug": "mens-fashion",
                    "parent": "167",
                    "parent_data": {
                        "id": "167",
                        "en_name": "Fashion & Beauty",
                        "km_name": "សំលៀកបំពាក់ & សម្រស់",
                        "slug": "fashion-beauty"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "709987",
                    "name": "Sothirith Chhan",
                    "username": "sothirithchhan",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/21-12-28/sothirithchhan_709987_1640680936_96.jpg",
                        "width": "1200",
                        "height": "1200",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-12-28/s-sothirithchhan_709987_1640680936_96.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-12-28/m-sothirithchhan_709987_1640680936_96.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-12-28/l-sothirithchhan_709987_1640680936_96.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706161866",
                        "date": "2024-01-25 12:51:46"
                    },
                    "is_verify": false,
                    "registered_date": "2021-12-28 15:41:11",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:24",
                "link": "https://www.khmer24.com/post-adid-10514047",
                "short_link": "https://www.khmer24.com/post-adid-10514047"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10451516",
                "title": "ដីនៅជិតច្រកព្រំដែលអូស្មាច់ខ្មែរ ថៃ ជិតផ្សារ ធនាគាអេសុីលីដា",
                "price": "20500.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-09/--242951170481093768905495-b.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481093752279374-c.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481093714354057-d.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481093755900904-e.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481093765117314-f.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481093736740287-g.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481093717355813-h.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-09/s---242951170481093768905495-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "30",
                    "en_name": "Oddar Meanchey",
                    "km_name": "ឧត្តមានជ័យ",
                    "en_name2": "Krong Samraong, Oddar Meanchey",
                    "km_name2": "សំរោង, ឧត្តមានជ័យ",
                    "en_name3": "Ou Smach, Krong Samraong, Oddar Meanchey",
                    "km_name3": "អូរស្មាច់, សំរោង, ឧត្តមានជ័យ",
                    "slug": "oddar-meanchey",
                    "long_location": "Ou Smach, Krong Samraong, Oddar Meanchey"
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "27000m²",
                        "display_value": "27000m²",
                        "value_slug": "27000"
                    }
                ],
                "user": {
                    "id": "242951",
                    "name": "Ah kon Pov",
                    "username": "fb-Ah1927504490834333KonP",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/24-01-21/fb-Ah1927504490834333KonP-20240121002456.jpg",
                        "width": "895",
                        "height": "900",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/s-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "60",
                            "height": "61"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/m-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "128",
                            "height": "129"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/l-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "200",
                            "height": "202"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162412",
                        "date": "2024-01-25 13:01:10"
                    },
                    "registered_date": "2017-10-28 10:09:26",
                    "is_verify": false,
                    "verified": [
                        "phone",
                        "facebook"
                    ],
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:23",
                "link": "https://www.khmer24.com/post-adid-10451516",
                "short_link": "https://www.khmer24.com/post-adid-10451516"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10451527",
                "title": "ខុំសល់ដីពាក់កណ្តាល់ដីផ្ទះចង់ដាក់ជួលនៅកណ្តាល់ក្រុងសៀមរាបជិតផ្សារក្រោម សាលាកំរើក ទំហំ100បណ្តោយ50",
                "price": "1400.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-09/-100-50-242951170481113348587746-b.jpg",
                    "https://images.khmer24.co/24-01-09/-100-50-242951170481113383448447-c.jpg",
                    "https://images.khmer24.co/24-01-09/-100-50-242951170481113329259653-d.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-09/s--100-50-242951170481113348587746-b.jpg",
                "condition": {
                    "title": "Rent",
                    "field": "listing_type",
                    "value": "rent"
                },
                "location": {
                    "id": "37",
                    "en_name": "Siem Reap",
                    "km_name": "សៀមរាប",
                    "en_name2": "Krong Siem Reab, Siem Reap",
                    "km_name2": "សៀមរាប, សៀមរាប",
                    "en_name3": "Sala Kamraeuk, Krong Siem Reab, Siem Reap",
                    "km_name3": "សាលាកំរើក, សៀមរាប, សៀមរាប",
                    "slug": "siem-reap",
                    "long_location": "Sala Kamraeuk, Krong Siem Reab, Siem Reap"
                },
                "category": {
                    "id": "81",
                    "en_name": "Land For Rent",
                    "km_name": "ដីសម្រាប់ជួល",
                    "slug": "land-for-rent",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "1500m²",
                        "display_value": "1500m²",
                        "value_slug": "1500"
                    }
                ],
                "user": {
                    "id": "242951",
                    "name": "Ah kon Pov",
                    "username": "fb-Ah1927504490834333KonP",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/24-01-21/fb-Ah1927504490834333KonP-20240121002456.jpg",
                        "width": "895",
                        "height": "900",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/s-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "60",
                            "height": "61"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/m-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "128",
                            "height": "129"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/l-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "200",
                            "height": "202"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162412",
                        "date": "2024-01-25 13:01:10"
                    },
                    "registered_date": "2017-10-28 10:09:26",
                    "is_verify": false,
                    "verified": [
                        "phone",
                        "facebook"
                    ],
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:21",
                "link": "https://www.khmer24.com/post-adid-10451527",
                "short_link": "https://www.khmer24.com/post-adid-10451527"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10451505",
                "title": "ដីលក់នៅជិតរោងចក្រស្កាគ្តាប់នៅគីឡូ១៦៩ដីជាប់ផ្លូវសងខាង",
                "price": "14700.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-09/--242951170481068313515958-b.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481068398332387-c.jpg",
                    "https://images.khmer24.co/24-01-09/--242951170481068372983692-d.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-09/s---242951170481068313515958-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "38",
                    "en_name": "Preah Sihanouk",
                    "km_name": "ព្រះសីហនុ",
                    "en_name2": "Prey Nob, Preah Sihanouk",
                    "km_name2": "ព្រៃនប់, ព្រះសីហនុ",
                    "en_name3": "Veal Renh, Prey Nob, Preah Sihanouk",
                    "km_name3": "វាលរេញ, ព្រៃនប់, ព្រះសីហនុ",
                    "slug": "preah-sihanouk",
                    "long_location": "Veal Renh, Prey Nob, Preah Sihanouk"
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "163m²",
                        "display_value": "163m²",
                        "value_slug": "163"
                    }
                ],
                "user": {
                    "id": "242951",
                    "name": "Ah kon Pov",
                    "username": "fb-Ah1927504490834333KonP",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/24-01-21/fb-Ah1927504490834333KonP-20240121002456.jpg",
                        "width": "895",
                        "height": "900",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/s-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "60",
                            "height": "61"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/m-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "128",
                            "height": "129"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/l-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "200",
                            "height": "202"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162412",
                        "date": "2024-01-25 13:01:10"
                    },
                    "registered_date": "2017-10-28 10:09:26",
                    "is_verify": false,
                    "verified": [
                        "phone",
                        "facebook"
                    ],
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:20",
                "link": "https://www.khmer24.com/post-adid-10451505",
                "short_link": "https://www.khmer24.com/post-adid-10451505"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10451540",
                "title": "ដីជាប់ថ្នល់ជាតិលេខ៤ពេជ្យនិលដីស្អាតលក់ជាម៉ែតដើរគីឡូ99នៅខាងសាំមដៃដីមកពីភ្នំពេញ",
                "price": "3750.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-09/-99--242951170481149861858320-b.jpg",
                    "https://images.khmer24.co/24-01-09/-99--242951170481149874839698-c.jpg",
                    "https://images.khmer24.co/24-01-09/-99--242951170481149875044924-d.jpg",
                    "https://images.khmer24.co/24-01-09/-99--242951170481149923170823-e.jpg",
                    "https://images.khmer24.co/24-01-09/-99--242951170481149925964431-f.jpg",
                    "https://images.khmer24.co/24-01-09/-99--242951170481149918099608-g.jpg",
                    "https://images.khmer24.co/24-01-09/-99--242951170481149931602655-h.jpg",
                    "https://images.khmer24.co/24-01-09/-99--242951170481149914322771-i.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-09/s--99--242951170481149861858320-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "22",
                    "en_name": "Kampong Speu",
                    "km_name": "កំពង់ស្ពឺ",
                    "en_name2": "Phnum Sruoch, Kampong Speu",
                    "km_name2": "ភ្នំស្រួច, កំពង់ស្ពឺ",
                    "en_name3": "Traeng Trayueng, Phnum Sruoch, Kampong Speu",
                    "km_name3": "ត្រែងត្រយឹង, ភ្នំស្រួច, កំពង់ស្ពឺ",
                    "slug": "kampong-speu",
                    "long_location": "Traeng Trayueng, Phnum Sruoch, Kampong Speu"
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "4902m²",
                        "display_value": "4902m²",
                        "value_slug": "4902"
                    }
                ],
                "user": {
                    "id": "242951",
                    "name": "Ah kon Pov",
                    "username": "fb-Ah1927504490834333KonP",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/24-01-21/fb-Ah1927504490834333KonP-20240121002456.jpg",
                        "width": "895",
                        "height": "900",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/s-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "60",
                            "height": "61"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/m-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "128",
                            "height": "129"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-21/l-fb-Ah1927504490834333KonP-20240121002456.jpg",
                            "width": "200",
                            "height": "202"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162412",
                        "date": "2024-01-25 13:01:10"
                    },
                    "registered_date": "2017-10-28 10:09:26",
                    "is_verify": false,
                    "verified": [
                        "phone",
                        "facebook"
                    ],
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:19",
                "link": "https://www.khmer24.com/post-adid-10451540",
                "short_link": "https://www.khmer24.com/post-adid-10451540"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10514046",
                "title": "Toyota Vitz 2010  សន្លឹកពន្ធ ធានាឡានស្អាត អត់បុកប៉ះ ថ្នាំសុីន1ជុំ",
                "price": "7500.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247282960224-b.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247211200210-c.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247284679466-d.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247254230971-e.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247279841447-f.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247338642954-g.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247353861706-h.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247389656922-i.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247333126215-j.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247358225014-k.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247378700539-l.jpg",
                    "https://images.khmer24.co/24-01-25/toyota-vitz-2010-1--504031170616247310433463-m.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-25/s-toyota-vitz-2010-1--504031170616247282960224-b.jpg",
                "condition": {
                    "title": "New",
                    "field": "condition",
                    "value": "new"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Ruessei Kaev, Phnom Penh",
                    "km_name2": "ឫស្សីកែវ, ភ្នំពេញ",
                    "en_name3": "Tuol Sangkae 2, Ruessei Kaev, Phnom Penh",
                    "km_name3": "ទួលសង្កែទី២, ឫស្សីកែវ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuol Sangkae 2, Ruessei Kaev, Phnom Penh",
                    "map": {
                        "x": "11.60555254916774",
                        "y": "104.89988531917334",
                        "z": 15
                    }
                },
                "category": {
                    "id": "67",
                    "en_name": "Cars for Sale",
                    "km_name": "រថយន្តសម្រាប់លក់",
                    "slug": "cars-for-sale",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Year",
                        "field": "car-year",
                        "value": "2010",
                        "display_value": "2010",
                        "value_slug": "2010"
                    },
                    {
                        "title": "Tax Type",
                        "field": "tax-type",
                        "value": "Tax Paper",
                        "display_value": "Tax Paper",
                        "value_slug": "tax-paper"
                    }
                ],
                "user": {
                    "id": "504031",
                    "name": "NG AUTO​",
                    "username": "NG-AUTO",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/23-06-08/NG-AUTO-20230608084840.jpg",
                        "width": "960",
                        "height": "960",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-06-08/s-NG-AUTO-20230608084840.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-06-08/m-NG-AUTO-20230608084840.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-06-08/l-NG-AUTO-20230608084840.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162472",
                        "date": "2024-01-25 13:05:10"
                    },
                    "is_verify": false,
                    "registered_date": "2020-08-07 01:58:42",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:15",
                "link": "https://www.khmer24.com/post-adid-10514046",
                "short_link": "https://www.khmer24.com/post-adid-10514046"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10498866",
                "title": "I9-14900K",
                "price": "620.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-21/i9-14900k-86632170582956038712205-b.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-21/s-i9-14900k-86632170582956038712205-b.jpg",
                "condition": {
                    "title": "New",
                    "field": "condition",
                    "value": "new"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Tuek Thla, Saensokh, Phnom Penh",
                    "km_name3": "ទឹកថ្លា, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuek Thla, Saensokh, Phnom Penh",
                    "map": {
                        "x": "11.56210785266721",
                        "y": "104.88853488117456",
                        "z": 15
                    }
                },
                "category": {
                    "id": "51",
                    "en_name": "Parts & Accessories",
                    "km_name": "គ្រឿងបន្លាស់ & សំភារះ",
                    "slug": "computer-parts-and-accessories",
                    "parent": "163",
                    "parent_data": {
                        "id": "163",
                        "en_name": "Computers & Accessories",
                        "km_name": "កុំព្យូទ័រ & គ្រឿងបន្លាស់",
                        "slug": "computer-and-accessories"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "86632",
                    "name": "Ravuth Ravuth",
                    "username": "Ravuth668",
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162362",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-03-04 22:26:09",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:13",
                "link": "https://www.khmer24.com/post-adid-10498866",
                "short_link": "https://www.khmer24.com/post-adid-10498866",
                "shipping": {
                    "type": "free",
                    "title": "ដឹកជញ្ជូនឥតគិតថ្លៃ"
                }
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": true
            }
        },
        {
            "type": "post",
            "data": {
                "id": "9168376",
                "title": "Dell optiplex 9020 MT",
                "price": "180.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-03-17/dell-optiplex-9020-mt-86632167903475286954110-b.jpg",
                    "https://images.khmer24.co/23-03-17/dell-optiplex-9020-mt-86632167903475247608715-c.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-03-17/s-dell-optiplex-9020-mt-86632167903475286954110-b.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Ou Baek K'am, Saensokh, Phnom Penh",
                    "km_name3": "អូរបែកក្អម, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Ou Baek K'am, Saensokh, Phnom Penh",
                    "map": {
                        "x": "11.56210785266721",
                        "y": "104.88853488117456",
                        "z": 15
                    }
                },
                "category": {
                    "id": "195",
                    "en_name": "Desktops",
                    "km_name": "កុំព្យូទ័រលើតុ",
                    "slug": "desktops",
                    "parent": "163",
                    "parent_data": {
                        "id": "163",
                        "en_name": "Computers & Accessories",
                        "km_name": "កុំព្យូទ័រ & គ្រឿងបន្លាស់",
                        "slug": "computer-and-accessories"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "86632",
                    "name": "Ravuth Ravuth",
                    "username": "Ravuth668",
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162362",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-03-04 22:26:09",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:11",
                "link": "https://www.khmer24.com/post-adid-9168376",
                "short_link": "https://www.khmer24.com/post-adid-9168376"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10496165",
                "title": "MacBook Air",
                "price": "650.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-20/apple-87184170575405795255593-b.jpg",
                    "https://images.khmer24.co/24-01-20/apple-87184170575405747036930-c.jpg",
                    "https://images.khmer24.co/24-01-20/apple-87184170575405792272673-d.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-20/s-apple-87184170575405795255593-b.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Por Senchey, Phnom Penh",
                    "km_name2": "ពោធិសែនជ័យ, ភ្នំពេញ",
                    "en_name3": "Kakab 1, Por Senchey, Phnom Penh",
                    "km_name3": "កាកាបទី១, ពោធិសែនជ័យ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Kakab 1, Por Senchey, Phnom Penh",
                    "map": {
                        "x": "12.50000000000000",
                        "y": "104.98061450000000",
                        "z": 15
                    }
                },
                "category": {
                    "id": "50",
                    "en_name": "Laptops",
                    "km_name": "កុំព្យូទ័រយួរដៃ",
                    "slug": "laptops",
                    "parent": "163",
                    "parent_data": {
                        "id": "163",
                        "en_name": "Computers & Accessories",
                        "km_name": "កុំព្យូទ័រ & គ្រឿងបន្លាស់",
                        "slug": "computer-and-accessories"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "87184",
                    "name": "Mom Pichsal",
                    "username": "Pichsol",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/21-07-26/Pichsol_87184_1627279901_2.jpg",
                        "width": "1200",
                        "height": "900",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/s-Pichsol_87184_1627279901_2.jpg",
                            "width": "80",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/m-Pichsol_87184_1627279901_2.jpg",
                            "width": "171",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/l-Pichsol_87184_1627279901_2.jpg",
                            "width": "267",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 2 hours ago",
                        "time": 1706151716,
                        "date": "2024-01-25 12:56:50"
                    },
                    "is_verify": false,
                    "registered_date": "2014-03-11 06:22:26",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:10",
                "link": "https://www.khmer24.com/post-adid-10496165",
                "short_link": "https://www.khmer24.com/post-adid-10496165"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10504279",
                "title": "650W gold plus",
                "price": "35.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-23/650w-gold-plus-86632170597354549384022-b.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-23/s-650w-gold-plus-86632170597354549384022-b.jpg",
                "condition": {
                    "title": "New",
                    "field": "condition",
                    "value": "new"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Tuek Thla, Saensokh, Phnom Penh",
                    "km_name3": "ទឹកថ្លា, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuek Thla, Saensokh, Phnom Penh",
                    "map": {
                        "x": "11.56210785266721",
                        "y": "104.88853488117456",
                        "z": 15
                    }
                },
                "category": {
                    "id": "51",
                    "en_name": "Parts & Accessories",
                    "km_name": "គ្រឿងបន្លាស់ & សំភារះ",
                    "slug": "computer-parts-and-accessories",
                    "parent": "163",
                    "parent_data": {
                        "id": "163",
                        "en_name": "Computers & Accessories",
                        "km_name": "កុំព្យូទ័រ & គ្រឿងបន្លាស់",
                        "slug": "computer-and-accessories"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "86632",
                    "name": "Ravuth Ravuth",
                    "username": "Ravuth668",
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162362",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-03-04 22:26:09",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:09",
                "link": "https://www.khmer24.com/post-adid-10504279",
                "short_link": "https://www.khmer24.com/post-adid-10504279"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10417809",
                "title": "ដីលក់បន្ទាន់12ហិចតា(ចុះពីផ្លូវជាតិ51 3គីឡូម៉ែត្រ)",
                "price": "27.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-02-07/-51-3--87184167573822610937327-b.jpg",
                    "https://images.khmer24.co/23-02-07/-51-3--87184167573822733199024-c.jpg",
                    "https://images.khmer24.co/23-02-07/-51-3--87184167573836216816946-d.jpg",
                    "https://images.khmer24.co/23-02-07/-51-3--87184167573822777476281-e.jpg",
                    "https://images.khmer24.co/24-01-19/-12-51-3--87184170563477462037536-f.jpg",
                    "https://images.khmer24.co/23-01-10/-51-3--87184167331221749508096-g.jpg",
                    "https://images.khmer24.co/24-01-18/-12-51-3--87184170554589049590451-h.jpg",
                    "https://images.khmer24.co/23-02-07/-51-3--87184167573878021429217-i.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-02-07/s--51-3--87184167573822610937327-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "22",
                    "en_name": "Kampong Speu",
                    "km_name": "កំពង់ស្ពឺ",
                    "en_name2": "Samkkei Munichay, Kampong Speu",
                    "km_name2": "សាមគ្គីមុនីជ័យ, កំពង់ស្ពឺ",
                    "en_name3": "Damnak Reang, Samkkei Munichay, Kampong Speu",
                    "km_name3": "ដំណាក់រាំង, សាមគ្គីមុនីជ័យ, កំពង់ស្ពឺ",
                    "slug": "kampong-speu",
                    "long_location": "Damnak Reang, Samkkei Munichay, Kampong Speu"
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "127099m²",
                        "display_value": "127099m²",
                        "value_slug": "127099"
                    }
                ],
                "user": {
                    "id": "87184",
                    "name": "Mom Pichsal",
                    "username": "Pichsol",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/21-07-26/Pichsol_87184_1627279901_2.jpg",
                        "width": "1200",
                        "height": "900",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/s-Pichsol_87184_1627279901_2.jpg",
                            "width": "80",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/m-Pichsol_87184_1627279901_2.jpg",
                            "width": "171",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/l-Pichsol_87184_1627279901_2.jpg",
                            "width": "267",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 2 hours ago",
                        "time": 1706151716,
                        "date": "2024-01-25 12:56:50"
                    },
                    "is_verify": false,
                    "registered_date": "2014-03-11 06:22:26",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:09",
                "link": "https://www.khmer24.com/post-adid-10417809",
                "short_link": "https://www.khmer24.com/post-adid-10417809"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10046054",
                "title": "I9-10900X",
                "price": "1.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-09-29/i9-10900x-86632169599416498533908-c.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-09-29/s-i9-10900x-86632169599416498533908-c.jpg",
                "condition": {
                    "title": "New",
                    "field": "condition",
                    "value": "new"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Tuek Thla, Saensokh, Phnom Penh",
                    "km_name3": "ទឹកថ្លា, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuek Thla, Saensokh, Phnom Penh",
                    "map": {
                        "x": "11.56210785266721",
                        "y": "104.88853488117456",
                        "z": 15
                    }
                },
                "category": {
                    "id": "51",
                    "en_name": "Parts & Accessories",
                    "km_name": "គ្រឿងបន្លាស់ & សំភារះ",
                    "slug": "computer-parts-and-accessories",
                    "parent": "163",
                    "parent_data": {
                        "id": "163",
                        "en_name": "Computers & Accessories",
                        "km_name": "កុំព្យូទ័រ & គ្រឿងបន្លាស់",
                        "slug": "computer-and-accessories"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "86632",
                    "name": "Ravuth Ravuth",
                    "username": "Ravuth668",
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162362",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-03-04 22:26:09",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:09",
                "link": "https://www.khmer24.com/post-adid-10046054",
                "short_link": "https://www.khmer24.com/post-adid-10046054",
                "shipping": {
                    "type": "free",
                    "title": "ដឹកជញ្ជូនឥតគិតថ្លៃ"
                }
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": true
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10249887",
                "title": "ដីលក់(បន្ទាន់)",
                "price": "10000.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803107-88348985-b.jpg",
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803107-64654023-c.jpg",
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803107-48205600-d.jpg",
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803107-56891400-e.jpg",
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803107-77338007-f.jpg",
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803108-91700582-g.jpg",
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803108-24297489-h.jpg",
                    "https://images.khmer24.co/21-09-28/87184--4-100--1632803108-30704329-i.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/21-09-28/s-87184--4-100--1632803107-88348985-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "38",
                    "en_name": "Preah Sihanouk",
                    "km_name": "ព្រះសីហនុ",
                    "en_name2": "Kampong Seila, Preah Sihanouk",
                    "km_name2": "កំពង់សីលា, ព្រះសីហនុ",
                    "en_name3": "Ou Bak Roteh, Kampong Seila, Preah Sihanouk",
                    "km_name3": "អូរបាក់រទេះ, កំពង់សីលា, ព្រះសីហនុ",
                    "slug": "preah-sihanouk",
                    "long_location": "Ou Bak Roteh, Kampong Seila, Preah Sihanouk"
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "80m²",
                        "display_value": "80m²",
                        "value_slug": "80"
                    }
                ],
                "user": {
                    "id": "87184",
                    "name": "Mom Pichsal",
                    "username": "Pichsol",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/21-07-26/Pichsol_87184_1627279901_2.jpg",
                        "width": "1200",
                        "height": "900",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/s-Pichsol_87184_1627279901_2.jpg",
                            "width": "80",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/m-Pichsol_87184_1627279901_2.jpg",
                            "width": "171",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-07-26/l-Pichsol_87184_1627279901_2.jpg",
                            "width": "267",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 2 hours ago",
                        "time": 1706151716,
                        "date": "2024-01-25 12:56:50"
                    },
                    "is_verify": false,
                    "registered_date": "2014-03-11 06:22:26",
                    "taxed": "0",
                    "user_type": "1"
                },
                "renew_date": "2024-01-25 13:01:08",
                "link": "https://www.khmer24.com/post-adid-10249887",
                "short_link": "https://www.khmer24.com/post-adid-10249887"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "9257353",
                "title": "Land For Urgent Sale along National Road No.4, On Km-74",
                "price": "27.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-04-04/90479-land-for-urgent-sale-along-national-road-no4-on-km-74-1680584970-38858742-b.jpg",
                    "https://images.khmer24.co/23-04-04/90479-land-for-urgent-sale-along-national-road-no4-on-km-74-1680584970-87991097-c.jpg",
                    "https://images.khmer24.co/23-04-04/90479-land-for-urgent-sale-along-national-road-no4-on-km-74-1680584970-66594080-d.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-04-04/s-90479-land-for-urgent-sale-along-national-road-no4-on-km-74-1680584970-38858742-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Preaek Pnov, Phnom Penh",
                    "km_name2": "ព្រែកព្នៅ, ភ្នំពេញ",
                    "en_name3": "Preaek Pnov, Preaek Pnov, Phnom Penh",
                    "km_name3": "ព្រែកព្នៅ, ព្រែកព្នៅ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Preaek Pnov, Preaek Pnov, Phnom Penh",
                    "map": {
                        "x": "11.54713303863242",
                        "y": "104.92258686572313",
                        "z": 15
                    }
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "170000m²",
                        "display_value": "170000m²",
                        "value_slug": "170000"
                    }
                ],
                "user": {
                    "id": "90479",
                    "name": "SONG",
                    "username": "FiveKeyRealty",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/22-10-01/fivekeyrealty_1664603906_86.jpg",
                        "width": "640",
                        "height": "640",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/s-fivekeyrealty_1664603906_86.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/m-fivekeyrealty_1664603906_86.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/l-fivekeyrealty_1664603906_86.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162402",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-04-27 19:48:25",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:07",
                "link": "https://www.khmer24.com/post-adid-9257353",
                "short_link": "https://www.khmer24.com/post-adid-9257353"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "9349957",
                "title": "ដី លក់បន្ទាន់ នៅសង្កាត់បឹងកក់ ខណ្ឌទួលគោក | Land For Urgent Sale​ at Toul Kork",
                "price": "2300.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-05-02/90479-land-for-urgent-sale-at-toul-kork-1683002338-37666201-b.jpg",
                    "https://images.khmer24.co/23-05-02/90479-land-for-urgent-sale-at-toul-kork-1683002339-40261130-c.jpg",
                    "https://images.khmer24.co/23-05-02/90479-land-for-urgent-sale-at-toul-kork-1683002339-99294043-d.jpg",
                    "https://images.khmer24.co/23-05-02/90479-land-for-urgent-sale-at-toul-kork-1683002339-16394860-e.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-05-02/s-90479-land-for-urgent-sale-at-toul-kork-1683002338-37666201-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Doun Penh, Phnom Penh",
                    "km_name2": "ដូនពេញ, ភ្នំពេញ",
                    "en_name3": "Chakto Mukh, Doun Penh, Phnom Penh",
                    "km_name3": "ចតុមុខ, ដូនពេញ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Chakto Mukh, Doun Penh, Phnom Penh",
                    "map": {
                        "x": "11.51610362702052",
                        "y": "104.92020295081781",
                        "z": 15
                    }
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "1327m²",
                        "display_value": "1327m²",
                        "value_slug": "1327"
                    }
                ],
                "user": {
                    "id": "90479",
                    "name": "SONG",
                    "username": "FiveKeyRealty",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/22-10-01/fivekeyrealty_1664603906_86.jpg",
                        "width": "640",
                        "height": "640",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/s-fivekeyrealty_1664603906_86.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/m-fivekeyrealty_1664603906_86.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/l-fivekeyrealty_1664603906_86.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162402",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-04-27 19:48:25",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:05",
                "link": "https://www.khmer24.com/post-adid-9349957",
                "short_link": "https://www.khmer24.com/post-adid-9349957"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "9257771",
                "title": "អគារអាផាតមិនថ្មី លក់ ឬជួល | New Building Apartment For Rent & Sale",
                "price": "9500000.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-04-04/90479-new-building-apartment-for-rent-amp-sale-1680590218-67067489-b.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-04-04/s-90479-new-building-apartment-for-rent-amp-sale-1680590218-67067489-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Preaek Pnov, Phnom Penh",
                    "km_name2": "ព្រែកព្នៅ, ភ្នំពេញ",
                    "en_name3": "Preaek Pnov, Preaek Pnov, Phnom Penh",
                    "km_name3": "ព្រែកព្នៅ, ព្រែកព្នៅ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Preaek Pnov, Preaek Pnov, Phnom Penh",
                    "map": {
                        "x": "11.54713303863242",
                        "y": "104.92258686572313",
                        "z": 15
                    }
                },
                "category": {
                    "id": "82",
                    "en_name": "Commercial Properties For Sale",
                    "km_name": "អចលនទ្រព្យពាណិជ្ជកម្មសម្រាប់លក់",
                    "slug": "commercial-properties-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "6350m²",
                        "display_value": "6350m²",
                        "value_slug": "6350"
                    }
                ],
                "user": {
                    "id": "90479",
                    "name": "SONG",
                    "username": "FiveKeyRealty",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/22-10-01/fivekeyrealty_1664603906_86.jpg",
                        "width": "640",
                        "height": "640",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/s-fivekeyrealty_1664603906_86.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/m-fivekeyrealty_1664603906_86.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/l-fivekeyrealty_1664603906_86.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162402",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-04-27 19:48:25",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:02",
                "link": "https://www.khmer24.com/post-adid-9257771",
                "short_link": "https://www.khmer24.com/post-adid-9257771"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "6406177",
                "title": "NEXSTAND K2 - Laptop Stand / Portable, Foldable & Height Adjustable",
                "price": 22,
                "type": "normal",
                "discount": {
                    "sale_price": 22,
                    "original_price": "25.00",
                    "amount_saved": 3,
                    "type": "amount",
                    "discount": "3.00"
                },
                "photos": [
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744837-87182523-b.jpg",
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744838-12193936-c.jpg",
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744838-66980255-d.jpg",
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744838-62981187-e.jpg",
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744839-33091463-f.jpg",
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744839-16447284-g.jpg",
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744839-26365794-h.jpg",
                    "https://images.khmer24.co/21-09-04/13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744839-59560129-i.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/21-09-04/s-13781-nexstand-k2-laptop-stand-portable-foldable-amp-height-adjustable-1630744837-87182523-b.jpg",
                "condition": {
                    "title": "New",
                    "field": "condition",
                    "value": "new"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Phnom Penh",
                    "km_name2": "ភ្នំពេញ",
                    "en_name3": "Phnom Penh",
                    "km_name3": "ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Phnom Penh"
                },
                "category": {
                    "id": "51",
                    "en_name": "Parts & Accessories",
                    "km_name": "គ្រឿងបន្លាស់ & សំភារះ",
                    "slug": "computer-parts-and-accessories",
                    "parent": "163",
                    "parent_data": {
                        "id": "163",
                        "en_name": "Computers & Accessories",
                        "km_name": "កុំព្យូទ័រ & គ្រឿងបន្លាស់",
                        "slug": "computer-and-accessories"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "13781",
                    "name": "Khmer Digital Store",
                    "username": "KhmerDigitalStore",
                    "photo": {
                        "url": "https://images.khmer24.co/members/13781/hanmenghuot_13781_1565943413_98.jpg",
                        "small": {
                            "url": "https://images.khmer24.co/members/13781/s-hanmenghuot_13781_1565943413_98.jpg"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/members/13781/s-hanmenghuot_13781_1565943413_98.jpg"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/members/13781/s-hanmenghuot_13781_1565943413_98.jpg"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 4 minutes ago",
                        "time": 1706162409,
                        "date": "2024-01-25 13:05:02"
                    },
                    "is_verify": false,
                    "registered_date": "2011-05-18 23:03:02",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-6406177",
                "short_link": "https://www.khmer24.com/post-adid-6406177",
                "shipping": {
                    "type": "free",
                    "title": "ដឹកជញ្ជូនឥតគិតថ្លៃ"
                }
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": true
            }
        },
        {
            "type": "post",
            "data": {
                "id": "9798657",
                "title": "ដីលក់ក្នុងក្រុងសៀមរាប-សង្កាត់ជ្រាវ/Land for Sale in​ Krong Siem Reap-Sangkat Chreav ",
                "price": "250.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/22-06-17/325711-land-for-sale-in-krong-siem-reap-sangkat-chreav-1655456360-90528554-b.jpg",
                    "https://images.khmer24.co/22-06-17/325711-land-for-sale-in-krong-siem-reap-sangkat-chreav-1655456360-51834308-c.jpg",
                    "https://images.khmer24.co/22-06-17/325711-land-for-sale-in-krong-siem-reap-sangkat-chreav-1655456361-47372151-d.jpg",
                    "https://images.khmer24.co/22-06-17/325711-land-for-sale-in-krong-siem-reap-sangkat-chreav-1655456361-97021362-e.jpg",
                    "https://images.khmer24.co/22-06-17/325711-land-for-sale-in-krong-siem-reap-sangkat-chreav-1655456361-94837811-f.jpg",
                    "https://images.khmer24.co/22-06-17/325711-land-for-sale-in-krong-siem-reap-sangkat-chreav-1655456361-97765568-g.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/22-06-17/s-325711-land-for-sale-in-krong-siem-reap-sangkat-chreav-1655456360-90528554-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "37",
                    "en_name": "Siem Reap",
                    "km_name": "សៀមរាប",
                    "en_name2": "Krong Siem Reab, Siem Reap",
                    "km_name2": "សៀមរាប, សៀមរាប",
                    "en_name3": "Chreav, Krong Siem Reab, Siem Reap",
                    "km_name3": "ជ្រាវ, សៀមរាប, សៀមរាប",
                    "slug": "siem-reap",
                    "long_location": "Chreav, Krong Siem Reab, Siem Reap",
                    "map": {
                        "x": "13.35306722874258",
                        "y": "103.85740194525124",
                        "z": 15
                    }
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "898m²",
                        "display_value": "898m²",
                        "value_slug": "898"
                    }
                ],
                "user": {
                    "id": "325711",
                    "name": "DaBest Properties Cambodia Co. LTD",
                    "username": "DaBest-Properties",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/21-03-17/dabest-proper_1615952725_b7.jpg",
                        "width": "1024",
                        "height": "576",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-03-17/s-dabest-proper_1615952725_b7.jpg",
                            "width": "107",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-03-17/m-dabest-proper_1615952725_b7.jpg",
                            "width": "228",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-03-17/l-dabest-proper_1615952725_b7.jpg",
                            "width": "356",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706161829",
                        "date": "2024-01-25 12:52:17"
                    },
                    "is_verify": false,
                    "registered_date": "2018-10-04 11:46:41",
                    "taxed": "0",
                    "user_type": "1"
                },
                "store": {
                    "id": "325711",
                    "title": "DaBest Properties Cambodia Co. LTD",
                    "username": "Dabest",
                    "userid": "325711",
                    "logo": {
                        "url": "https://images.khmer24.co/members/325711/logo/dabest_1597280989_72.jpg",
                        "small": {
                            "url": "https://images.khmer24.co/members/325711/logo/s-dabest_1597280989_72.jpg"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/members/325711/logo/s-dabest_1597280989_72.jpg"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/members/325711/logo/s-dabest_1597280989_72.jpg"
                        }
                    },
                    "cover": {
                        "url": "https://images.khmer24.co/stores/covers/24-01-17/dabest_1705464257_93.jpg",
                        "width": "1000",
                        "height": "750",
                        "small": {
                            "url": "https://images.khmer24.co/stores/covers/24-01-17/s-dabest_1705464257_93.jpg",
                            "width": "480",
                            "height": "360"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/stores/covers/24-01-17/m-dabest_1705464257_93.jpg",
                            "width": "854",
                            "height": "640"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/stores/covers/24-01-17/l-dabest_1705464257_93.jpg",
                            "width": "1094",
                            "height": "820"
                        }
                    },
                    "is_verify": false,
                    "created_date": true,
                    "taxed": "0"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-9798657",
                "short_link": "https://www.khmer24.com/post-adid-9798657"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10436818",
                "title": "프놈펜에 렌트 아파트Near Exchange square｜1 bed : 400$ up/month, 2 bedrooms 600$ up/month | Pool, gym",
                "price": "400.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062166-16940058-b.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062166-17139573-c.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062166-89380599-d.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062167-44923856-e.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062167-99267907-f.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062167-85007674-g.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062167-67781018-h.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062168-89449578-i.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062168-66731799-j.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062168-84470839-k.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062168-94619930-l.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062169-38645858-m.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062169-46504045-n.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062169-73624541-o.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062169-86388605-p.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062170-75290618-q.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062170-69692569-r.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062170-43951269-s.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062170-58969071-t.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062171-76541090-u.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062171-51452925-v.jpg",
                    "https://images.khmer24.co/22-03-12/292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062171-55176536-w.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/22-03-12/s-292390-vattanac-tower-area-modern-style-1-bedroom-apartment-for-rent-1647062166-16940058-b.jpg",
                "condition": {
                    "title": "Rent",
                    "field": "listing_type",
                    "value": "rent"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Prampir Meakkakra, Phnom Penh",
                    "km_name2": "៧មករា, ភ្នំពេញ",
                    "en_name3": "Mittakpheap, Prampir Meakkakra, Phnom Penh",
                    "km_name3": "មិត្ដភាព, ៧មករា, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Mittakpheap, Prampir Meakkakra, Phnom Penh",
                    "map": {
                        "x": "11.56745736297606",
                        "y": "104.90898205587119",
                        "z": 15
                    }
                },
                "category": {
                    "id": "79",
                    "en_name": "Apartment For Rent",
                    "km_name": "អាផាតមិនសំរាប់ជួល",
                    "slug": "apartment-for-rent",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Bedroom",
                        "field": "bedroom",
                        "value": "1",
                        "display_value": "1 Bedroom",
                        "value_slug": "1"
                    },
                    {
                        "title": "Bathroom",
                        "field": "bathroom",
                        "value": "1",
                        "display_value": "1 Bathroom",
                        "value_slug": "1"
                    },
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "55m²",
                        "display_value": "55m²",
                        "value_slug": "55"
                    }
                ],
                "user": {
                    "id": "292390",
                    "name": "CAM Realty",
                    "username": "OeurnSytha",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/22-03-30/oeurnsytha_1648604801_61.jpg",
                        "width": "1024",
                        "height": "1024",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-03-30/s-oeurnsytha_1648604801_61.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-03-30/m-oeurnsytha_1648604801_61.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-03-30/l-oeurnsytha_1648604801_61.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 51 minutes ago",
                        "time": 1706159257,
                        "date": "2024-01-25 12:59:15"
                    },
                    "is_verify": false,
                    "registered_date": "2018-05-10 17:54:22",
                    "taxed": "0",
                    "user_type": "1"
                },
                "store": {
                    "id": "335649",
                    "title": "CAM Realty - Home and office in Phnom Penh",
                    "username": "www.camrealtyservice.com",
                    "userid": "292390",
                    "logo": {
                        "url": "https://images.khmer24.co/stores/logos/22-03-30/www.camrealtyse_1648604704_e8.jpg",
                        "width": "1280",
                        "height": "1280",
                        "small": {
                            "url": "https://images.khmer24.co/stores/logos/22-03-30/s-www.camrealtyse_1648604704_e8.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/stores/logos/22-03-30/m-www.camrealtyse_1648604704_e8.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/stores/logos/22-03-30/l-www.camrealtyse_1648604704_e8.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "cover": {
                        "url": "https://images.khmer24.co/stores/covers/22-06-30/www.camrealtyse_1656557525_0d.jpg",
                        "width": "1024",
                        "height": "390",
                        "small": {
                            "url": "https://images.khmer24.co/stores/covers/22-06-30/s-www.camrealtyse_1656557525_0d.jpg",
                            "width": "946",
                            "height": "360"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/stores/covers/22-06-30/m-www.camrealtyse_1656557525_0d.jpg",
                            "width": "1681",
                            "height": "640"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/stores/covers/22-06-30/l-www.camrealtyse_1656557525_0d.jpg",
                            "width": "2154",
                            "height": "820"
                        }
                    },
                    "is_verify": false,
                    "created_date": true,
                    "taxed": "1"
                },
                "renew_date": "2024-01-25 09:31:31",
                "link": "https://www.khmer24.com/post-adid-10436818",
                "short_link": "https://www.khmer24.com/post-adid-10436818"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10271539",
                "title": "ដីកែងជួល ផ្លូវ1003",
                "price": "7800.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-11-24/-30-100-1003-954681170079252646628470-b.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-11-24/s--30-100-1003-954681170079252646628470-b.jpg",
                "condition": {
                    "title": "Rent",
                    "field": "listing_type",
                    "value": "rent"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Phnom Penh Thmei, Saensokh, Phnom Penh",
                    "km_name3": "ភ្នំពេញថ្មី, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Phnom Penh Thmei, Saensokh, Phnom Penh"
                },
                "category": {
                    "id": "81",
                    "en_name": "Land For Rent",
                    "km_name": "ដីសម្រាប់ជួល",
                    "slug": "land-for-rent",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "3000m²",
                        "display_value": "3000m²",
                        "value_slug": "3000"
                    }
                ],
                "user": {
                    "id": "954681",
                    "name": "NsCambo",
                    "username": "nscambo",
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 5 hours ago",
                        "time": 1706144127,
                        "date": "2024-01-25 12:56:18"
                    },
                    "is_verify": false,
                    "registered_date": "2023-11-12 15:05:21",
                    "taxed": "1",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-10271539",
                "short_link": "https://www.khmer24.com/post-adid-10271539"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10327577",
                "title": "IMPORT USED CAR FROM KOREA",
                "price": "12000.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-12-09/946685-import-used-car-from-korea-1702093520-96386896-b.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632880-81637912-b.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632880-82927014-c.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632881-59494507-d.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632881-86779314-e.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632881-71936644-f.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632882-71217161-g.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632882-62017680-h.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632882-74477714-i.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632883-43101671-j.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632883-82117209-k.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632884-83898684-l.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632884-87812319-m.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632884-54795306-n.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632885-31739796-o.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632885-91752466-p.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632886-64840098-q.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632886-19406936-r.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632887-93874807-s.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632887-84061568-t.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632887-17393216-u.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632888-56976292-v.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632888-85891050-w.jpg",
                    "https://images.khmer24.co/24-01-19/946685-import-used-car-from-korea-1705632888-90323710-x.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-12-09/s-946685-import-used-car-from-korea-1702093520-96386896-b.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Phnom Penh Thmei, Saensokh, Phnom Penh",
                    "km_name3": "ភ្នំពេញថ្មី, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Phnom Penh Thmei, Saensokh, Phnom Penh"
                },
                "category": {
                    "id": "67",
                    "en_name": "Cars for Sale",
                    "km_name": "រថយន្តសម្រាប់លក់",
                    "slug": "cars-for-sale",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Year",
                        "field": "car-year",
                        "value": "2008",
                        "display_value": "2008",
                        "value_slug": "2008"
                    },
                    {
                        "title": "Tax Type",
                        "field": "tax-type",
                        "value": "Tax Paper",
                        "display_value": "Tax Paper",
                        "value_slug": "tax-paper"
                    }
                ],
                "user": {
                    "id": "946685",
                    "name": "NewK NewKspace",
                    "username": "NewKspace",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/24-01-19/newkspace_1705634127_ca.png",
                        "width": "883",
                        "height": "887",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-19/s-newkspace_1705634127_ca.png",
                            "width": "60",
                            "height": "61"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-19/m-newkspace_1705634127_ca.png",
                            "width": "128",
                            "height": "129"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-19/l-newkspace_1705634127_ca.png",
                            "width": "200",
                            "height": "201"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active Yesterday",
                        "time": 1706065919,
                        "date": "2024-01-25 13:05:06"
                    },
                    "is_verify": false,
                    "registered_date": "2023-10-22 10:58:40",
                    "taxed": "1",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-10327577",
                "short_link": "https://www.khmer24.com/post-adid-10327577",
                "shipping": {
                    "type": "free",
                    "title": "ដឹកជញ្ជូនឥតគិតថ្លៃ"
                }
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": true
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10373655",
                "title": "កង់ ៣  អាគុយ E- JOKE (X3)",
                "price": 578,
                "type": "normal",
                "discount": {
                    "sale_price": 578,
                    "original_price": "680.00",
                    "amount_saved": 102,
                    "type": "percent",
                    "discount": "15.00"
                },
                "photos": [
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229289681745-b.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229243529884-c.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229250289406-d.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229217261237-e.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229252203098-f.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229271165635-g.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229267505352-h.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229241019829-i.jpg",
                    "https://images.khmer24.co/23-12-20/-e-joke-x3--610278170306229279298737-j.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-12-20/s--e-joke-x3--610278170306229289681745-b.jpg",
                "condition": {
                    "title": "New",
                    "field": "condition",
                    "value": "new"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Ruessei Kaev, Phnom Penh",
                    "km_name2": "ឫស្សីកែវ, ភ្នំពេញ",
                    "en_name3": "Tuol Sangkae 1, Ruessei Kaev, Phnom Penh",
                    "km_name3": "ទួលសង្កែទី១, ឫស្សីកែវ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuol Sangkae 1, Ruessei Kaev, Phnom Penh",
                    "map": {
                        "x": "11.58884425395257",
                        "y": "104.90942057222128",
                        "z": 15
                    }
                },
                "category": {
                    "id": "192",
                    "en_name": "Bicycles",
                    "km_name": "កង់",
                    "slug": "bicycles",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "610278",
                    "name": "Sok Srun",
                    "username": "soksrun8888",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/21-03-24/soksrun46661146_610278_1616557940_27.jpg",
                        "width": "900",
                        "height": "1200",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-03-24/s-soksrun46661146_610278_1616557940_27.jpg",
                            "width": "60",
                            "height": "80"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-03-24/m-soksrun46661146_610278_1616557940_27.jpg",
                            "width": "128",
                            "height": "171"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/21-03-24/l-soksrun46661146_610278_1616557940_27.jpg",
                            "width": "200",
                            "height": "267"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 22-Jan-2024",
                        "time": 1705940034,
                        "date": "2024-01-25 13:03:54"
                    },
                    "is_verify": false,
                    "registered_date": "2021-03-24 10:51:45",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-10373655",
                "short_link": "https://www.khmer24.com/post-adid-10373655",
                "shipping": {
                    "type": "free",
                    "title": "ដឹកជញ្ជូនឥតគិតថ្លៃ"
                }
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": true
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10433371",
                "title": "2018 full option ថ្មីសាហាវ កៅអីចុចសងខាង",
                "price": 22200,
                "type": "normal",
                "discount": {
                    "sale_price": 22200,
                    "original_price": "23200.00",
                    "amount_saved": 1000,
                    "type": "amount",
                    "discount": "1000.00"
                },
                "photos": [
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576634900873-b.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576648161886-c.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576670279781-d.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576727652902-e.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576718282296-f.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576782557393-g.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576767668229-h.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576764272057-i.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576738723027-j.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576715447737-k.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576787026131-l.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576774570771-m.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576736079828-n.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576747434481-o.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576763581104-p.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576899845308-q.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576827838164-r.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576831676540-s.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576825361022-t.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576856921240-u.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576828764559-v.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576863699929-w.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576857133852-x.jpg",
                    "https://images.khmer24.co/24-01-05/2018-full-option--751790170443576868299575-y.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-05/s-2018-full-option--751790170443576634900873-b.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Por Senchey, Phnom Penh",
                    "km_name2": "ពោធិសែនជ័យ, ភ្នំពេញ",
                    "en_name3": "Chaom Chau 1, Por Senchey, Phnom Penh",
                    "km_name3": "ចោមចៅទី១, ពោធិសែនជ័យ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Chaom Chau 1, Por Senchey, Phnom Penh"
                },
                "category": {
                    "id": "67",
                    "en_name": "Cars for Sale",
                    "km_name": "រថយន្តសម្រាប់លក់",
                    "slug": "cars-for-sale",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Year",
                        "field": "car-year",
                        "value": "2018",
                        "display_value": "2018",
                        "value_slug": "2018"
                    },
                    {
                        "title": "Tax Type",
                        "field": "tax-type",
                        "value": "Tax Paper",
                        "display_value": "Tax Paper",
                        "value_slug": "tax-paper"
                    }
                ],
                "user": {
                    "id": "751790",
                    "name": "Bunnarath Eagle Man",
                    "username": "bunnaratheagleman",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/23-01-06/bunnaratheagleman-20230106130450.jpg",
                        "width": "720",
                        "height": "728",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-01-06/s-bunnaratheagleman-20230106130450.jpg",
                            "width": "60",
                            "height": "61"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-01-06/m-bunnaratheagleman-20230106130450.jpg",
                            "width": "128",
                            "height": "130"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-01-06/l-bunnaratheagleman-20230106130450.jpg",
                            "width": "200",
                            "height": "203"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 21 hours ago",
                        "time": 1706083752,
                        "date": "2024-01-25 12:52:56"
                    },
                    "is_verify": false,
                    "registered_date": "2022-05-03 03:49:33",
                    "taxed": "1",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-10433371",
                "short_link": "https://www.khmer24.com/post-adid-10433371"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10428358",
                "title": "Galaxy S22+ Sim1+ESim1 365$មិនចុះទេ (វៃដូបាន)",
                "price": "365.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-04/galaxy-s22-sim1-esim1-365--509381170434444589138663-b.jpg",
                    "https://images.khmer24.co/24-01-04/galaxy-s22-sim1-esim1-365--509381170434444576816522-c.jpg",
                    "https://images.khmer24.co/24-01-04/galaxy-s22-sim1-esim1-365--509381170434444519188918-d.jpg",
                    "https://images.khmer24.co/24-01-04/galaxy-s22-sim1-esim1-365--509381170434444676726929-e.jpg",
                    "https://images.khmer24.co/24-01-04/galaxy-s22-sim1-esim1-365--509381170434444694296920-f.jpg",
                    "https://images.khmer24.co/24-01-04/galaxy-s22-sim1-esim1-365--509381170434444614271204-g.jpg",
                    "https://images.khmer24.co/24-01-04/galaxy-s22-sim1-esim1-365--509381170434444674879953-h.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-04/s-galaxy-s22-sim1-esim1-365--509381170434444589138663-b.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Tuek Thla, Saensokh, Phnom Penh",
                    "km_name3": "ទឹកថ្លា, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Tuek Thla, Saensokh, Phnom Penh",
                    "map": {
                        "x": "11.55659635485501",
                        "y": "104.87870056182146",
                        "z": 15
                    }
                },
                "category": {
                    "id": "61",
                    "en_name": "Phones",
                    "km_name": "ទូរស័ព្ទ",
                    "slug": "phones",
                    "parent": "162",
                    "parent_data": {
                        "id": "162",
                        "en_name": "Phones & Tablets",
                        "km_name": "ទូរស័ព្ទ & ថេប្លេត",
                        "slug": "mobile-phones-tablets"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "509381",
                    "name": "ខ្ទមស្រែ ប្រុស៚ស្វិត៚ លក់ទូរស័ព្ទទំនើប",
                    "username": "BoySvet",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/24-01-15/509381532edfd4de9cb71a203144731311705297358567748044670.jpg",
                        "width": "1200",
                        "height": "1168",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-15/s-509381532edfd4de9cb71a203144731311705297358567748044670.jpg",
                            "width": "62",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-15/m-509381532edfd4de9cb71a203144731311705297358567748044670.jpg",
                            "width": "132",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-15/l-509381532edfd4de9cb71a203144731311705297358567748044670.jpg",
                            "width": "206",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162213",
                        "date": "2024-01-25 13:01:43"
                    },
                    "is_verify": false,
                    "registered_date": "2020-08-24 20:21:59",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-10428358",
                "short_link": "https://www.khmer24.com/post-adid-10428358"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10485225",
                "title": "Honda Scoopy  2024 ក្រុមហ៊ុនថ្មី  តេឡេ",
                "price": "2830.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-18/honda-scoopy-2024--678259170554114515982403-b.jpg",
                    "https://images.khmer24.co/24-01-18/honda-scoopy-2024--678259170554114571554023-c.jpg",
                    "https://images.khmer24.co/24-01-18/honda-scoopy-2024--678259170554114594831531-d.jpg",
                    "https://images.khmer24.co/24-01-18/honda-scoopy-2024--678259170554114584092869-e.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-18/s-honda-scoopy-2024--678259170554114515982403-b.jpg",
                "condition": {
                    "title": "New",
                    "field": "condition",
                    "value": "new"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Prampir Meakkakra, Phnom Penh",
                    "km_name2": "៧មករា, ភ្នំពេញ",
                    "en_name3": "Veal Vong, Prampir Meakkakra, Phnom Penh",
                    "km_name3": "វាលវង់, ៧មករា, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Veal Vong, Prampir Meakkakra, Phnom Penh",
                    "map": {
                        "x": "11.55588880982528",
                        "y": "104.91525135934353",
                        "z": 15
                    }
                },
                "category": {
                    "id": "116",
                    "en_name": "Motorcycles For Sale",
                    "km_name": "ម៉ូតូសម្រាប់លក់",
                    "slug": "motorcycles-for-sale",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Year",
                        "field": "motorcycle-year",
                        "value": "2024",
                        "display_value": "2024",
                        "value_slug": "2024"
                    },
                    {
                        "title": "Tax Type",
                        "field": "tax-type",
                        "value": "Tax Paper",
                        "display_value": "Tax Paper",
                        "value_slug": "tax-paper"
                    }
                ],
                "user": {
                    "id": "678259",
                    "name": "Heng MengLeang",
                    "username": "HengMengleang95",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/24-01-23/6782593c9ae73063b7905d117201131731706004112157275839431.jpg",
                        "width": "845",
                        "height": "1200",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-23/s-6782593c9ae73063b7905d117201131731706004112157275839431.jpg",
                            "width": "60",
                            "height": "86"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-23/m-6782593c9ae73063b7905d117201131731706004112157275839431.jpg",
                            "width": "128",
                            "height": "182"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/24-01-23/l-6782593c9ae73063b7905d117201131731706004112157275839431.jpg",
                            "width": "200",
                            "height": "285"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 1 hour ago",
                        "time": 1706156498,
                        "date": "2024-01-25 12:58:09"
                    },
                    "is_verify": false,
                    "registered_date": "2021-09-16 14:44:35",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-10485225",
                "short_link": "https://www.khmer24.com/post-adid-10485225"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "9466957",
                "title": "ផ្ទះអាជីវកម្មសម្រាប់ជួល នៅលើផ្លូវធំ271 | Shophouse for Rent On Big Street271",
                "price": "2000.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-05-24/258656-271-shophouse-for-rent-on-big-street271-1684897663-11700102-b.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-05-24/s-258656-271-shophouse-for-rent-on-big-street271-1684897663-11700102-b.jpg",
                "condition": {
                    "title": "Rent",
                    "field": "listing_type",
                    "value": "rent"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Chamkar Mon, Phnom Penh",
                    "km_name2": "ចំការមន, ភ្នំពេញ",
                    "en_name3": "Phsar Daeum Thkov, Chamkar Mon, Phnom Penh",
                    "km_name3": "ផ្សារដើមថ្កូវ, ចំការមន, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Phsar Daeum Thkov, Chamkar Mon, Phnom Penh"
                },
                "category": {
                    "id": "77",
                    "en_name": "House For Rent",
                    "km_name": "ផ្ទះសម្រាប់ជួល",
                    "slug": "house-for-rent",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "258656",
                    "name": "Mr.Dara",
                    "username": "Dara_Property",
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 1 hour ago",
                        "time": 1706158845,
                        "date": "2024-01-25 13:05:34"
                    },
                    "registered_date": "2018-01-03 08:24:23",
                    "is_verify": false,
                    "verified": [
                        "phone"
                    ],
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:01",
                "link": "https://www.khmer24.com/post-adid-9466957",
                "short_link": "https://www.khmer24.com/post-adid-9466957"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "9333771",
                "title": "ដីពាណិជ្ជកម្ម លក់បន្ទាន់ | Commercial Land For Urgent Sale",
                "price": "1950.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-05-02/90479-commercial-land-for-urgent-sale-1683002242-42293353-b.jpg",
                    "https://images.khmer24.co/23-05-02/90479-commercial-land-for-urgent-sale-1683002242-56944175-c.jpg",
                    "https://images.khmer24.co/23-05-02/90479-commercial-land-for-urgent-sale-1683002242-61692067-d.jpg",
                    "https://images.khmer24.co/23-05-02/90479-commercial-land-for-urgent-sale-1683002243-79564447-e.jpg",
                    "https://images.khmer24.co/23-05-02/90479-commercial-land-for-urgent-sale-1683002243-21540421-f.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-05-02/s-90479-commercial-land-for-urgent-sale-1683002242-42293353-b.jpg",
                "condition": {
                    "title": "Sale",
                    "field": "listing_type",
                    "value": "sale"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Doun Penh, Phnom Penh",
                    "km_name2": "ដូនពេញ, ភ្នំពេញ",
                    "en_name3": "Chakto Mukh, Doun Penh, Phnom Penh",
                    "km_name3": "ចតុមុខ, ដូនពេញ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Chakto Mukh, Doun Penh, Phnom Penh",
                    "map": {
                        "x": "11.51610362702052",
                        "y": "104.92020295081781",
                        "z": 15
                    }
                },
                "category": {
                    "id": "80",
                    "en_name": "Land For Sale",
                    "km_name": "ដីលក់",
                    "slug": "land-for-sale",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Size",
                        "field": "size",
                        "value": "3272m²",
                        "display_value": "3272m²",
                        "value_slug": "3272"
                    }
                ],
                "user": {
                    "id": "90479",
                    "name": "SONG",
                    "username": "FiveKeyRealty",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/22-10-01/fivekeyrealty_1664603906_86.jpg",
                        "width": "640",
                        "height": "640",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/s-fivekeyrealty_1664603906_86.jpg",
                            "width": "60",
                            "height": "60"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/m-fivekeyrealty_1664603906_86.jpg",
                            "width": "128",
                            "height": "128"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/22-10-01/l-fivekeyrealty_1664603906_86.jpg",
                            "width": "200",
                            "height": "200"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162402",
                        "date": "2024-01-25 13:01:52"
                    },
                    "is_verify": false,
                    "registered_date": "2014-04-27 19:48:25",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:01:00",
                "link": "https://www.khmer24.com/post-adid-9333771",
                "short_link": "https://www.khmer24.com/post-adid-9333771"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "8870347",
                "title": "អគារសម្រាប់ជួលនៅជិតសង្កាត់គោកឃ្លាង ភ្នំពេញថ្មី Building for Rent, Property Code: VBRE01071",
                "price": "10000.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929307-70205371-b.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929308-63585620-c.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929308-82294848-d.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929308-98274017-e.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929308-91836365-f.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929309-21120426-g.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929309-50219884-h.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929309-41910546-i.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929309-11266218-j.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929309-83911515-k.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929310-59873660-l.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929310-35943437-m.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929310-57441087-n.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929310-93744079-o.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929310-32124152-p.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929311-29439488-q.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929311-46877791-r.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929311-70617580-s.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929311-66539621-t.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929311-63534606-u.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929312-25153821-v.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929312-46032800-w.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929312-56859873-x.jpg",
                    "https://images.khmer24.co/23-01-17/792766-building-for-rent-property-code-vbre01071-1673929312-26472487-y.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/23-01-17/s-792766-building-for-rent-property-code-vbre01071-1673929307-70205371-b.jpg",
                "condition": {
                    "title": "Rent",
                    "field": "listing_type",
                    "value": "rent"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Saensokh, Phnom Penh",
                    "km_name2": "សែនសុខ, ភ្នំពេញ",
                    "en_name3": "Kouk Khleang, Saensokh, Phnom Penh",
                    "km_name3": "គោកឃ្លាង, សែនសុខ, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Kouk Khleang, Saensokh, Phnom Penh"
                },
                "category": {
                    "id": "83",
                    "en_name": "Commercial Properties For Rent",
                    "km_name": "អចលនទ្រព្យពាណិជ្ជកម្មសម្រាប់ជួល",
                    "slug": "commercial-properties-for-rent",
                    "parent": "48",
                    "parent_data": {
                        "id": "48",
                        "en_name": "House & Land",
                        "km_name": "ផ្ទះ & ដី",
                        "slug": "property-housing-rentals"
                    }
                },
                "highlight_specs": null,
                "user": {
                    "id": "792766",
                    "name": "Admin VBRE Sok Kim Eng",
                    "username": "SokKimengAdmin",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/23-09-27/79276664d94559809d356b175100102151695798611990334098772.jpg",
                        "width": "906",
                        "height": "1200",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-09-27/s-79276664d94559809d356b175100102151695798611990334098772.jpg",
                            "width": "60",
                            "height": "80"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-09-27/m-79276664d94559809d356b175100102151695798611990334098772.jpg",
                            "width": "128",
                            "height": "170"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-09-27/l-79276664d94559809d356b175100102151695798611990334098772.jpg",
                            "width": "200",
                            "height": "265"
                        }
                    },
                    "online_status": {
                        "is_active": false,
                        "last_active": "Last Active 23 minutes ago",
                        "time": 1706160996,
                        "date": "2024-01-25 13:00:05"
                    },
                    "is_verify": false,
                    "registered_date": "2022-08-15 09:54:00",
                    "taxed": "0",
                    "user_type": "1"
                },
                "store": {
                    "id": "373462",
                    "title": "V-BANTEAY REAL ESTATE",
                    "username": "VBRERealEstate",
                    "userid": "792766",
                    "logo": {
                        "url": "https://images.khmer24.co/stores/logos/22-08-17/sokkimeng_1660709580_a6.jpg",
                        "width": "1279",
                        "height": "1280",
                        "small": {
                            "url": "https://images.khmer24.co/stores/logos/22-08-17/s-sokkimeng_1660709580_a6.jpg",
                            "width": "60",
                            "height": "61"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/stores/logos/22-08-17/m-sokkimeng_1660709580_a6.jpg",
                            "width": "128",
                            "height": "129"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/stores/logos/22-08-17/l-sokkimeng_1660709580_a6.jpg",
                            "width": "200",
                            "height": "201"
                        }
                    },
                    "is_verify": false,
                    "created_date": true,
                    "taxed": "0"
                },
                "renew_date": "2024-01-24 16:23:58",
                "link": "https://www.khmer24.com/post-adid-8870347",
                "short_link": "https://www.khmer24.com/post-adid-8870347"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        },
        {
            "type": "post",
            "data": {
                "id": "10514045",
                "title": "Honda PCX 2019",
                "price": "2070.00",
                "type": "normal",
                "photos": [
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245561173802-b.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245551248782-c.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245577126872-d.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245683095225-e.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245643519919-f.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245668858784-g.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245659636876-h.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245670740789-i.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245797068591-j.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245735501806-k.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245757239816-l.jpg",
                    "https://images.khmer24.co/24-01-25/honda-pcx-2019-288698170616245760977947-m.jpg"
                ],
                "thumbnail": "https://images.khmer24.co/24-01-25/s-honda-pcx-2019-288698170616245561173802-b.jpg",
                "condition": {
                    "title": "Used",
                    "field": "condition",
                    "value": "used"
                },
                "location": {
                    "id": "32",
                    "en_name": "Phnom Penh",
                    "km_name": "ភ្នំពេញ",
                    "en_name2": "Prampir Meakkakra, Phnom Penh",
                    "km_name2": "៧មករា, ភ្នំពេញ",
                    "en_name3": "Boeng Prolit, Prampir Meakkakra, Phnom Penh",
                    "km_name3": "បឹងព្រលឹត, ៧មករា, ភ្នំពេញ",
                    "slug": "phnom-penh",
                    "long_location": "Boeng Prolit, Prampir Meakkakra, Phnom Penh",
                    "map": {
                        "x": "11.55966170571904",
                        "y": "104.91530768573284",
                        "z": 15
                    }
                },
                "category": {
                    "id": "116",
                    "en_name": "Motorcycles For Sale",
                    "km_name": "ម៉ូតូសម្រាប់លក់",
                    "slug": "motorcycles-for-sale",
                    "parent": "49",
                    "parent_data": {
                        "id": "49",
                        "en_name": "Cars and Vehicles",
                        "km_name": "រថយន្ត និង យានយន្ត",
                        "slug": "cars-and-vehicles"
                    }
                },
                "highlight_specs": [
                    {
                        "title": "Year",
                        "field": "motorcycle-year",
                        "value": "2019",
                        "display_value": "2019",
                        "value_slug": "2019"
                    },
                    {
                        "title": "Tax Type",
                        "field": "tax-type",
                        "value": "Plate Number",
                        "display_value": "Plate Number",
                        "value_slug": "plate-number"
                    }
                ],
                "user": {
                    "id": "288698",
                    "name": "ស៊ូ អាន",
                    "username": "Su-AnMotor",
                    "photo": {
                        "url": "https://images.khmer24.co/profiles/pictures/23-10-22/288698c2f8d4601a7906db20314474105169795919395722101531.jpeg",
                        "width": "540",
                        "height": "1200",
                        "small": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-10-22/s-288698c2f8d4601a7906db20314474105169795919395722101531.jpeg",
                            "width": "60",
                            "height": "134"
                        },
                        "medium": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-10-22/m-288698c2f8d4601a7906db20314474105169795919395722101531.jpeg",
                            "width": "128",
                            "height": "285"
                        },
                        "large": {
                            "url": "https://images.khmer24.co/profiles/pictures/23-10-22/l-288698c2f8d4601a7906db20314474105169795919395722101531.jpeg",
                            "width": "200",
                            "height": "445"
                        }
                    },
                    "online_status": {
                        "is_active": true,
                        "last_active": "Online Now",
                        "time": "1706162018",
                        "date": "2024-01-25 12:55:57"
                    },
                    "is_verify": false,
                    "registered_date": "2018-04-27 09:59:58",
                    "taxed": "0",
                    "user_type": "2"
                },
                "renew_date": "2024-01-25 13:00:59",
                "link": "https://www.khmer24.com/post-adid-10514045",
                "short_link": "https://www.khmer24.com/post-adid-10514045"
            },
            "setting": {
                "enable_chat": true,
                "enable_like": true,
                "enable_save": true,
                "enable_comment": true,
                "enable_apply_job": false,
                "enable_shipping": false
            }
        }
    ]
})

</script>
<style scoped>
/* .home {
    padding: 5px;
    width: 100%;
} */


</style>

