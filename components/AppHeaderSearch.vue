<template>
    <div class="header-search">
        <button class="close-icon">
            <Icon icon="material-symbols:close" />
        </button>
        <div class="search-box">
            <input type="text" name="" id="" placeholder="Search"/>
        </div>
        <button class="search-icon">
            <Icon icon="iconamoon:search" />
        </button>
    </div>
</template>


<style scoped>
.header-search {
    border-bottom: 1px solid lightgray;
    padding: 0 16px;
    height: 50px;
    background: white;
    display: flex;
    align-items: center;
    column-gap: 16px;
}

.header-search > .close-icon, .search-icon {
    display: flex;
    align-items: center;
    color: gray;
    height: 100%;    
    background: transparent;
    border: none;
    font-size: 24px;

}

 .search-box { 
    padding: 8px ;
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    height: 80%;
    border-radius: 4px;
    color: white;
} 

.search-box > input {
    font-size: 18px;
    border: none;
    outline: none;
    background: transparent;
    color: gray;
}


</style>