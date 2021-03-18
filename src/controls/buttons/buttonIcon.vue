<template>
    <button @click="onClick" :type="typeButton" class="btn" :class="className" :disabled="disabledValue">
        <span v-if="icon !== ''">
            <i :class="icon"></i>
        </span>
    </button>
</template>
<script>
export default {
    name: "ButtonIcon",
    props: {
       icon: String,
       typeButton: String,
       className: String,
       disabledValue: {
           type: Boolean,
           default: false
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
    .btnIcon-1 {
        background:    #d71515;
        border: 0px;
        padding:       5px 8px;
        color:         #ffffff;
        display:       inline-block;
        font:          normal bold 16px/1 "Lato", sans-serif;
        text-align:    center;
    }
    .btnIcon-2 {
        background:    #15d715;
        border: 0px;
        padding:       5px 8px;
        color:         #ffffff;
        display:       inline-block;
        font:          normal bold 16px/1 "Lato", sans-serif;
        text-align:    center;
    }
</style>