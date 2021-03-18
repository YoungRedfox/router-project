<template>
    <div class="descriptionContent">
        <paragraf-default className="type-2" :value="podtytul">
            <paragraf-default className="type-3" :value="description"></paragraf-default>
        </paragraf-default>
    </div>
</template>
<script>
import ParagrafDefault from "./paragrafDefault";
export default {
    name: "Description",
    components: {
        ParagrafDefault,
    },
    props: {
        description : String,
    },
    computed: {
        podtytul(){
            const desTwoWord = this.description.split(' ')
            return `${desTwoWord[0]} ${desTwoWord[1]} ...`
        }
    }
}
</script>
<style lang="scss">
    .descriptionContent{
        padding: 10px;
    }
</style>