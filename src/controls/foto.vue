<template>
    <div class="fotoContent">
        <img :src="defaultImage" :alt="altImg">
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
    computed: {
        defaultImage(){
            
            return this.urlImg !== "" ? this.urlImg : "https://via.placeholder.com/600/92c952" 

        }
    },
}
// https://via.placeholder.com/600/92c952
</script>
<style lang="scss">
    .fotoContent img{
        max-width: 556px;
        max-height: 556px;
        width: 100%;
        height: 100%;
    }
</style>