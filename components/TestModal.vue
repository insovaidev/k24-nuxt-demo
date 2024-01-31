<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    All Location
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-xxl-down c-modal-dialog">
      <div class="modal-content c-modal-content">

        <div class="modal-header c-modal-header">
          <button type="button" class="c-btn-close close-icon" data-bs-dismiss="modal" :class="[currentIndex == 0 ? 'active' : '' ]">
            <Icon icon="material-symbols:close" />
          </button>
          <!-- Back List Modal -->
          <button @click="toPrarentlist" class="back-icon" :class="[currentIndex > 0 ? 'active' : '']">
              <Icon icon="material-symbols:arrow-back-ios-new" />
          </button>

          <p>Location</p>
          <button type="button" class="c-btn-clear t-active">Clear</button>
        </div>

        <div class="modal-body c-modal-body">
          <div class="list province child-box active" id="list1" ref="box1">
              <!-- To Sub List -->
              <li v-for="(item, index) in province.data" :key="index"  @click="toSublist(item)" class="list-item">
                  <p>{{ locale === 'en' ? item.en_name : item.km_name}}</p>
                  <Icon v-show="item.id != selectedItem.provinceId" icon="ri:arrow-drop-right-line" /> 
                  <Icon v-show="item.id == selectedItem.provinceId" class="t-primary" icon="mdi:checkbox-marked-circle" />  
              </li>
          </div>

          <div class="list district child-box " id="list2" ref="box2">
              <li class="list-item title-ads-location t-active">
                  <p>Show all ads {{ parentName }}</p>
              </li>
              <li v-for="(item, index) in district.data" :key="index"  @click="toSublist(item)" class="list-item">
                  <p>{{ locale === 'en' ? item.en_name : item.km_name}}</p>
                  <Icon v-show="item.id != selectedItem.districtId" icon="ri:arrow-drop-right-line" /> 
                  <Icon v-show="item.id == selectedItem.districtId" class="t-primary" icon="mdi:checkbox-marked-circle" />    
              </li>
          </div>

          <div class="list district child-box " id="list3" ref="box3">
              <li class="list-item title-ads-location t-active">
                  <p>Show all ads in {{ parentName }}</p>
              </li>
              <li v-for="(item, index) in commune.data"  @click="toSublist(item)"  :key="index" class="list-item">
                  <p>{{ locale === 'en' ? item.en_name : item.km_name}}</p>
                  <Icon v-show="item.id != selectedItem.communeId" icon="ri:arrow-drop-right-line" /> 
                  <Icon v-show="item.id == selectedItem.communeId" class="t-primary" icon="mdi:checkbox-marked-circle" />        
              </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const parentName = ref(null)
const province = ref([])
const district = ref([])
const commune = ref([])

const selectedItem =  ref({
    'provinceId': null,
    'districtId': null,
    'communeId': null,
})


// element for add class
const currentIndex = useState('currentIndex', () => 0);



const filterLocation = ref(true)
const box1 = ref([])
const box2 = ref([])
const box3 = ref([])

const childBoxes = ref([
    box1, box2, box3
])

function showCurrentBox() {
    // Hide all child boxes
    childBoxes.value.forEach(box => {
        box.value.classList.remove("active");        
    });
    // Show the child box at the current index
    childBoxes.value[currentIndex.value].value.classList.add("active")
}

function toSublist(item) {
    if(locale.value === 'en') parentName.value = item.en_name
    if(locale.value === 'km') parentName.value = item.km_name 
    let parentType = 'province'
    currentIndex.value = (currentIndex.value + 1) % childBoxes.value.length;
    showCurrentBox();
    if(item.type == 'province') {
        selectedItem.value.provinceId = item.id
        parentType = 'district'
    }
    if(item.type == 'district') {
        parentType = 'commune'
        selectedItem.value.districtId = item.id
    } 

    if(item.type == 'commune') {
        // parentType = 'commune'
        selectedItem.value.communeId = item.id
    } 
    getLocation(parentType,item.slug)
    selectedItem.value.provinceId
    localStorage.setItem('selectedItem' , JSON.stringify(selectedItem.value))
    // console.log(selectedItem.value)

}

function toPrarentlist() {
    currentIndex.value = (currentIndex.value - 1 + childBoxes.value.length) % childBoxes.value.length;
    showCurrentBox();
    const selected = localStorage.getItem('selectedItem')
    selectedItem.value = JSON.parse(selected)
    // console.log(selectedItem.value)
}

const getLocation = async (type, slug) =>{
    const data = await $fetch(`https://api.khmer24.com/v1.0/locations?type=${type}&parent=${slug}&lang=${locale}`)
    if(type == 'district')  district.value = data
    if(type == 'commune') commune.value = data
}

const deleteKeyOnLocalStorage = (key) => {
    localStorage.removeItem(key)
}

onMounted(()=>{
    const locations = localStorage.getItem('locations')
    const selected = localStorage.getItem('selectedItem')
    if(locations != undefined) province.value = JSON.parse(locations)
    if(selected != undefined) selectedItem.value = JSON.parse(selected)
})

</script>

  
<style scoped>

.c-btn-close, .back-icon {
  display: none;
}
.c-btn-close.active, .back-icon.active {
  display: block;
}

.c-modal-body > .list {
    height: 100%;
    display: none;

}

.c-modal-body > .list.active {
    height: 100%;
    display: block;
}
.c-modal-dialog {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow-y: hidden;
  min-width: 100% !important;
  left: 0;
  bottom: 0;
  height: 60% !important;
  position: absolute;
}

.c-modal-content {
  height: 100%;
  min-width: 100% !important;
}

.c-modal-header {
  line-height: 1.5;
  background: lightgray;
  min-width: 100% !important;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.c-modal-header > p {
  height: 100%;
}
.c-modal-header>button {
  border: none;
  background-color: transparent;
}

.c-modal-body {
  
}


</style>