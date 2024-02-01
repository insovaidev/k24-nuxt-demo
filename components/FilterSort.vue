<template>
    <button type="button" class="filter-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p> {{ $t('new_text_2.sort') }}</p>
        <Icon icon="mdi:caret-down" />
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-xxl-down c-modal-dialog">
            <div class="modal-content c-modal-content">

                <div class="modal-header c-modal-header">
                    <button type="button" class="c-btn-close close-icon active" data-bs-dismiss="modal">
                        <Icon icon="material-symbols:close" />
                    </button>

                    <p>Sort</p>
                    <button type="button" class="c-btn-clear t-active">Clear</button>
                </div>

                <div class="modal-body c-modal-body">
                    <div class="list province child-box active" id="list1" ref="box1">
                        <!-- To Sub List -->
                        <li v-for="(item, index) in sortItem" :key="index" @click="selectSort(item)" class="list-item">
                            <p>{{ locale === 'en' ? item.label : item.label }}</p>
                            <Icon v-show="sortSelected && item.id == sortSelected.id" class="t-primary"
                                icon="mdi:checkbox-marked-circle" />
                        </li>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()


const sortSelected = ref({
    'id': '',
    'sortValue': ''
})


const selectSort = (item) => {
    sortSelected.value.id = item.id
    sortSelected.value.sortValue = item.sortValue
    console.log("sortSelected", sortSelected.value.sortValue)
    localStorage.setItem('sortItem', JSON.stringify(sortSelected.value))
}

const sortItem = ref([
    { id: 1, label: 'Lates Ads', sortValue: 'latesads' },
    { id: 2, label: 'Most Hit Ads', sortValue: 'mosthitads' },
    { id: 3, label: 'New Ads', sortValue: 'newads' },
    { id: 4, label: 'Price: Low to Hight', sortValue: 'priceasc' },
    { id: 5, label: 'Price: Hight to Low', sortValue: 'pricedesc' },

])

onMounted(() => {
    const sortSelectedStore = localStorage.getItem('sortItem')
    if (sortSelectedStore != undefined) sortSelected.value = JSON.parse(sortSelectedStore)
})

</script>