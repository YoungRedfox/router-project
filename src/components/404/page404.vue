<template>
    <div>
        <p>
            Nie ma takiej strony
        </p>
        <button @click="goHome">Home</button>
    </div>
</template>
<script>
export default {
    name: "Page404",
    methods: {
        goHome(){
            this.$router.push("/")
            console.log(this.$router)
        }
    }
}
</script>
<style lang="scss">

</style>