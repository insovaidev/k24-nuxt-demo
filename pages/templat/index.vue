<template>
    <div class="paragrash">
        <p key="i" v-for="i in a" v-html="checkAddTage(i)" ></p>
    </div>
</template>


<script setup>

// const a = [
//         `Call 855 87 823 833`,
//         `087 823 833`,
//         `Channel: https://t.me/LGS_REALESTATE`,
//         `Website: https://lgscambodia.com/`,
//         `Website: https://www.lgsrealestate.com.kh`  
// ]

const paragraph = "🏠ផ្ទះអាជីវកម្មកែង សម្រាប់លក់បន្ទាន់!!!\r\n⛳️ទីតាំងនៅបុរីប៉េងហួតបឹងស្នោរ ច្បារអំពៅ ផ្លូវជាតិលេខ1.\r\n- តម្លៃលក់: 260,000$ (អាចចរចាបាន)\r\n- ផ្ទេរកម្មសិទ្ធប្លងរឹងជូន\r\n- ទំហំដី : 8m x 22m\r\n- ទំហំផ្ទះ: 4,5m x 14m\r\n- សល់ដីចំហៀង: 3,5m\r\n- ចំនួនបន្ទប់គេង:4 | ចំនួនបន្ទប់ទឹក:5\r\n✅សុវិត្ថភាព សន្ដិសុខ24ម៉ោង\r\n📩សម្រាប់ព័ត៌មានបន្ថែមសូមទំនាក់ទំនងមកកាន់ទូរស័ព្ទលេខ:\r\n📲078 823 833 | 087 823 833\r\n📲078 85 80 80 | 086 823 833 សូមអរគុណ!\r\nChannel: https://t.me/LGS_REALESTATE\r\nWebsite: https://lgscambodia.com/\r\nWebsite: https://www.lgsrealestate.com.kh"
// const a = paragraph.split('\n')

// const a = [
//     "🏠ផ្ទះអាជីវកម្មកែង សម្រាប់លក់បន្ទាន់!!!\r",
//     "⛳️ទីតាំងនៅបុរីប៉េងហួតបឹងស្នោរ ច្បារអំពៅ ផ្លូវជាតិលេខ1.\r",
//     "- តម្លៃលក់: 260,000$ (អាចចរចាបាន)\r",
//     "- ផ្ទេរកម្មសិទ្ធប្លងរឹងជូន\r",
//     "- ទំហំដី : 8m x 22m\r",
//     "- ទំហំផ្ទះ: 4,5m x 14m\r",
//     "- សល់ដីចំហៀង: 3,5m\r",
//     "- ចំនួនបន្ទប់គេង:4 | ចំនួនបន្ទប់ទឹក:5\r",
//     "✅សុវិត្ថភាព សន្ដិសុខ24ម៉ោង\r",
//     "📩សម្រាប់ព័ត៌មានបន្ថែមសូមទំនាក់ទំនងមកកាន់ទូរស័ព្ទលេខ:\r",
//     "📲078 823 833 | 087 823 833\r",
//     "📲078 85 80 80 | 086 823 833 សូមអរគុណ!\r",
//     "Channel: https://t.me/LGS_REALESTATE\r",
//     "Website: https://lgscambodia.com/\r",
//     "Website: https://www.lgsrealestate.com.kh"
// ]



const a = [
    "បងៗសួស្តី",
    "",
    "មានដីចំការ១កន្លែងមានទីតាំងស្ថិតនៅភូមិជ្រោយដង ឃុំសំរោងធំ ស្រុកកៀនស្វាយខេត្តកណ្ដាល។ ជាប្រភេទដីកសិកម្ម ដីចំការដែលដីល្អបំផុតសម្រាប់ការដាំដុះដំណាំផ្សេងៗមិនថាដំណាំរយៈពេលខ្លីឬវែងហើយជាពិសេសទីតាំងដីមានចម្ងាយប្រហែល1.2គម តែប៉ុណ្ណោះពីផ្លូវជាតិលេខ 1។ ដីដាំអីក៏ល្អដែរ ព្រោះដីមានជីជាតិល្អ កៀកផ្លូវចេញចូល។",
    "",
    "ទំហំ: ♥️16មម*379ម♥️",
    "តម្លៃ: $18/ម ការេ ចរចាបាន",
    "ប្លង់ទន់បង់ពន្ធខេត្តត្រឹមត្រូវ",
    "",
    "សម្រាប់ព័ត៌មានបន្ថែមពីដី បងៗអាចធ្វើការទំនាក់ទំនងមកកាន់លេខទូរសព្ទដូចខាងក្រោមសូមអរគុណ។",
    "",
    "☎️010 668836/017 885593/012 293923",
    "Telegram មានគ្រប់ប្រព័ន្ធ",
    "Channel: https://t.me/LGS_REALESTATE\r",
    "Website: https://lgscambodia.com/\r",   
    "Website: https://www.lgsrealestate.com.kh"
]





// const testString = "Contact me at 078 823 833";


function checkAddTage(testString) {
    let s = testString
    let filters = store_regex()
    let phoneReg = new RegExp(filters.join("|"), 'gi')

    const a = testString.split('|')

    const urlReg = /https?:\/\/[^\s]+/

    a.forEach(v => {
        if(v.match(phoneReg)) {
            // console.log('match', v.match(phoneReg)[0])
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




// checkAddTage(testString)





















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














// function updateTage(str) {
//     if(str) {

//         console.log(str)


//         let filters = store_regex()

//         const p = str
//         let pUpdateTage = str

//         let phoneReg = new RegExp(filters.join("|"), 'gi')
        
//         const pm = p.match(phoneReg)


//         const t = str
//         let tUpdate = str

//         const sm = t.match(/https?:\/\/[^\s]+/)

//         if(pm) {
//             // console.log(pm)
//             // console.log('phone number')
//             const updateTage = pUpdateTage.replace(pm, `<a href='tel:${pm[0]}' >${pm}</a>`)
//             return updateTage

//         } else if (sm) {
//             // console.log('link')
//             const updateTage = tUpdate.replace(sm, `<a href='${sm[0]}}}'>${sm}</a>`)
//             // console.log(updateTage)
//             return updateTage
//         } else {
//             return str
//         }
//     }


    
    // const paragraph = "🏠ផ្ទះអាជីវកម្មកែង សម្រាប់លក់បន្ទាន់!!!\r\n⛳️ទីតាំងនៅបុរីប៉េងហួតបឹងស្នោរ ច្បារអំពៅ ផ្លូវជាតិលេខ1.\r\n- តម្លៃលក់: 260,000$ (អាចចរចាបាន)\r\n- ផ្ទេរកម្មសិទ្ធប្លងរឹងជូន\r\n- ទំហំដី : 8m x 22m\r\n- ទំហំផ្ទះ: 4,5m x 14m\r\n- សល់ដីចំហៀង: 3,5m\r\n- ចំនួនបន្ទប់គេង:4 | ចំនួនបន្ទប់ទឹក:5\r\n✅សុវិត្ថភាព សន្ដិសុខ24ម៉ោង\r\n📩សម្រាប់ព័ត៌មានបន្ថែមសូមទំនាក់ទំនងមកកាន់ទូរស័ព្ទលេខ:\r\n📲078 823 833 | 087 823 833\r\n📲078 85 80 80 | 086 823 833 សូមអរគុណ!\r\nChannel: https://t.me/LGS_REALESTATE\r\nWebsite: https://lgscambodia.com/\r\nWebsite: https://www.lgsrealestate.com.kh"
    // const p = paragraph.split('\n')

    // for (let i =0; i < p.length; i++) {
    //     console.log(p[i])
    // }


   


    // return str

// }


// updateTage()





// updateTage()

</script>


<style scoped>
.paragrash {
    width: 100%;
white-space: breack-space;
word-break: break-word;
line-height: 2;
}

a:hover {
    cursor: pointer;
}


</style>


