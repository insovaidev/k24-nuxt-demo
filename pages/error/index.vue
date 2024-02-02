
<template>
    <template>
        <!-- some content -->
        Cotent..
        <NuxtErrorBoundary @error="someErrorLogger">
            <!-- You use the default slot to render your content -->
            <template #error="{ error, clearError }">
                You can display the error locally here: {{ error }}
                <button @click="clearError">
                    This will clear the error.
                </button>
            </template>
        </NuxtErrorBoundary>
    </template>
</template>


<script setup>



// console.log(data)

async function test() {
    // try {
    //     const data = await $fetch(`http://localhost:5555/activity`)
    // } catch (error) {
    //     console.log(error.statusCode)
    // }

    const { data: d, error} = await useFetch(`http://localhost:5555/activity`)
    if (!d.value) {
      console.log('=====', error.value)  
      throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
      })
    }

} 
test()



</script>


