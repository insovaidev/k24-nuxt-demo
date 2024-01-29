<template>
    <div class="footer-container">
        <div class="nav-item active">
            <Icon class="icon" icon="fa-solid:home" />
            <p>Home</p>
        </div>
    </div>
</template>

<style scoped>
.footer-container {
    display: flex;
    flex-wrap: nowrap;    

}

.footer-container > .nav-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;    

}

.footer-container > .active {
    color: var(--active);
}

.footer-container > .icon {
    font-size: 32px;   
}

</style>