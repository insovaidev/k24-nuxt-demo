<template>
    <div class="search-result-container">
        <div class="search-result">
            <div class="search-icon">
                <Icon class="search-icon" icon="iconamoon:search" />
            </div>
            <div class="search-value">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit excepturi consectetur
                    voluptatum </p>
            </div>
            <div class="link-icon">
                <Icon icon="material-symbols-light:arrow-insert" />
            </div>
        </div>
        <div class="sub-search-result">
            <div class="search-icon">
            </div>
            <div class="search-value">
                <Icon class="enter-arrow" icon="fluent:arrow-enter-left-20-filled" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit excepturi consectetur
                    voluptatum </p>
            </div>
            <div class="link-icon">
                <Icon icon="material-symbols-light:arrow-insert" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-result-container {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
}

.search-result, .sub-search-result {
    padding: 0 16px;
    height: 50px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 16px;

}

.search-value {
    column-gap: 16px;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
}

.search-value > .enter-arrow {    
    margin-left: 16px;
    transform: rotateY(0.5turn); 
}
</style>