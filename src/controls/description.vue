<template>
    <div class="descriptionContent">
        <paragraf-default className="type-2" :value="podtytul">
            <paragraf-default className="type-3" :value="tytul"></paragraf-default>
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
            if(this.description === "") {
                return "Brak opisu"
            }
            const desTwoWord = this.description.split(' ')
            return `${desTwoWord[0]} ${desTwoWord[1]} ...`
        },
        tytul(){
            if(this.description === "") {
                return ""
            }
            return this.description
        }
    }
}
</script>
<style lang="scss">
    .descriptionContent{
        padding: 10px;
    }
</style>