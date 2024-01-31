    <template>
        <div class="filter-button-container">
            <button @click="filterSort = !filterSort" class="filter-button">
                <p> {{ $t('new_text_2.sort') }}</p>
                <Icon icon="mdi:caret-down" />
            </button>
            <div class="filter-bottom-modal" :class="[ filterSort ? 'active' : '']">
                <div class="filter-bottom-modal-bar">
                    <!-- Close Modal -->
                    <button @click="filterSort = !filterSort" class="active">
                        <Icon icon="material-symbols:close"  />
                    </button>
                </div>

                <ul class="list-localtion" >
                    <div class="list province child-box active" id="list1" ref="box1">
                        <!-- To Sub List -->
                        <li v-for="(item, index) in sortItem" :key="index"  @click="toSublist(item)" class="list-item">
                            <!-- <p>{{ locale === 'en' ? item.en_name : item.km_name}}</p> -->

                            <p>{{ item.label }}</p>
                            <!-- <Icon v-show="item.id != selectedItem.provinceId" icon="ri:arrow-drop-right-line" /> 
                            <Icon v-show="item.id == selectedItem.provinceId" class="t-primary" icon="mdi:checkbox-marked-circle" />   -->
                        </li>
                    </div>
                    
                </ul>
            </div>
        </div>   
    </template>

    <script setup>

    const { locale } = useI18n()

    const filterSort = ref(false)

    const sortItem = ref([
        {id: 1, label: 'Lates Ads', value: 'latesads'},
        {id: 2, label: 'Most Hit Ads', value: 'mosthitads'},
        {id: 3, label: 'New Ads', value: 'newads'},
        {id: 4, label: 'Price: Low to Hight', value: 'asc'},
        {id: 5, label: 'Price: Hight to Low', value: 'dsec'},

    ])



    </script>