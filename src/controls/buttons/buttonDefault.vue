<template>
    <div>
        <span v-if="iconName !== ''">
            <i :class="iconName"></i>
        </span>
        <button :type="typeButton" class="btn" :class="className">
            <span class="buttonValue">{{valueButton}}</span>
        </button>
    </div>
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
            require: true,
        }
    }
}
</script>
<style lang="scss">
    .btn{
        padding: 10px 0px;
        background: chartreuse;
    }
</style>