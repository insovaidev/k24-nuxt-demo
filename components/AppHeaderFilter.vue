<template>
    <div class="header-filter">
        <button class="back-icon">
            <Icon icon="ion:arrow-back" />
        </button>
        <div class="search-box">
            <Icon  class="search-icon" icon="iconamoon:search" />
            <p>Electric & Applicance</p>
        </div>
        <button class="adjust-icon">
            <Icon icon="tabler:adjustments-horizontal" />
        </button>
    </div>
</template>

<script setup>

const props = defineProps(['filters'])


console.log(props.filters)

</script>

<style scoped>
.header-filter {
    padding: 0 16px;
    height: 50px;
    background: var(--pr-color);
    display: flex;
    align-items: center;
    column-gap: 16px;
}

.header-filter > .back-icon, .adjust-icon {
    display: flex;
    align-items: center;
    color: white;
    height: 100%;    
    background: transparent;
    border: none;
    font-size: 32px;

}
.search-box { 
    padding: 8px ;
    background: rgba(245, 245, 245, 0.288);
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    height: 80%;
    border-radius: 4px;
    color: white;
    
}
.search-box > p {
    font-weight: 300 !important;
}


</style>