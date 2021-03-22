<template>
    <div>
        <label :for="nameTextarea" class="labelTextarea" :class="classNameLabel">{{valueLabel}}</label>
        <textarea 
        class="textarea" 
        :class="className" 
        v-model="valueTextarea" 
        :id="idTextarea" 
        :name="nameTextarea" 
        :placeholder="placeholderTextarea"
        @change="changeValue(valueTextarea)">
        </textarea>
    </div>
</template>
<script>
export default {
    name: "DefaultTextarea",
    props: {
        valueLabel: String,
        idTextarea: String,
        nameTextarea: String,
        placeholderTextarea: String,
        className: String,
        classNameLabel: String,
        valueTextarea: String,
    },
    methods: {
        changeValue(value){
             this.$emit('change', value)
             console.log(value)
        }
    }
}
</script>
<style lang="scss">
    label.labelTextarea {
        display: block;
        margin-bottom: 10px;
        font-size: 24px;
    }
    .textarea {
        width: 100%;
        height: 70px;
    }
</style>