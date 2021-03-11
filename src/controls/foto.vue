<template>
    <div class="fotoContent">
        <img :src="urlImg" :alt="altImg">
    </div>
</template>
<script>
export default {
    name: "Foto",
    props: {
        urlImg: {
            type: String,
            require: true,
        },
        altImg: {
            type: String,
            default: "",
        }
    },
}
</script>
<style lang="scss">

</style>