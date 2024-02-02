export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        // handle error, e.g. report to a service
        console.log('some error happend', error)
    }
})