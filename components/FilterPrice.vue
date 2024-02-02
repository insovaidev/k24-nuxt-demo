<template>
    <button type="button" class="filter-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p>Price</p>
        <Icon icon="mdi:caret-down" />
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-xxl-down c-modal-dialog c-filter-price">
            <div class="modal-content c-modal-content">

                <div class="modal-header c-modal-header">
                    <button type="button" class="c-btn-close close-icon active" data-bs-dismiss="modal">
                        <Icon icon="material-symbols:close" />
                    </button>
                    <p>Price</p>
                    <button type="button" class="c-btn-clear t-active">Clear</button>
                </div>

                <div class="modal-body c-modal-body price-filter">
                    <div class="number-box">
                        <div class="input-price min-number-input">
                            <label for="commune">Price</label>
                            <input type="number" placeholder="Minimum $" />
                        </div>
                        <div class="input-price max-number-input">
                            <input type="number" placeholder="Maximum $" />
                        </div>
                    </div>
                    <button class="apply-price-filter">
                    Apply Filter
                </button>
                </div>

                
            </div>
        </div>
    </div>

</template>

<script setup>


</script>

<style scoped>


.c-filter-price {
    height: max-content !important;
}
.price-filter {
    padding: 16px 8px;
}

.c-modal-body > .number-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    column-gap: 24px;
    min-width: 100%;
}

.input-price {
    width: 50%;
}


</style>

