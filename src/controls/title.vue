<template>
    <div class="titleContent">
        <paragraf-default className="type-1" :value="title"></paragraf-default>
    </div>
</template>
<script>
import ParagrafDefault from "./paragrafDefault";
export default {
    name: "Title",
    components: {
        ParagrafDefault,
    },
    props: {
        title : String,
    },
}
</script>
<style lang="scss">
    .titleContent{
        padding: 10px;
        background-color: rgb(168, 135, 222);
        text-align: center;
    }
</style>