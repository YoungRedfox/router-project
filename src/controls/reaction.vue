<template>
    <div class="reactionContent">
        <paragraf-default className="type-4" :valueNumber="valueReaction"> <i :class="iconCode" class="displayIcon"> </i></paragraf-default>
    </div>
</template>
<script>
import ParagrafDefault from "./paragrafDefault";
export default {
    name: "Reaction",
    components: {
        ParagrafDefault,
    },
    props: {
        valueReaction: {
            type: Number,
            require: true,
        },
        iconCode: String,
    },
}
</script>
<style lang="scss">
    .reactionContent{
        .displayIcon {
            padding-left: 5px;
        }
    }
</style>