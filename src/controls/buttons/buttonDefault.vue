<template>
    <button @click="onClick" :type="typeButton" class="btn" :class="className">
        <span v-if="iconName !== ''">
            <i :class="iconName"></i>
        </span>
        <span v-if="valueButton !== ''" class="buttonValue">
            {{valueButton}}
        </span>
    </button>
</template>
<script>
export default {
    name: "DefaultButton",
    props: {
        iconName: String,
        typeButton: {
            type: String,
            default: "button",
        },
        className: String,
        valueButton: {
            type: String,
        }
    },
    methods: {
        onClick(obj){
            this.$emit('click', obj)
        }
    }
}
</script>
<style lang="scss">
    .btn{
        padding: 10px 10px;
    }
</style>