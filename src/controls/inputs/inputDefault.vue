<template>
    <p>
        <label :for="nameInput" class="labelImput" :class="classNameLabel">{{valueLabel}}</label>
        <input :type="typeInput" class="input" :class="className" 
            v-model="valueInput" :id="idInput" :name="nameInput"
        :placeholder="placeholderInput">
    </p>
</template>
<script>
export default {
    name: "DefaultInput",
    props: {
        idInput: String,
        nameInput: String,
        placeholderInput: String,
        typeInput: {
            type: String,
            default: "text",
        },
        className: String,
        classNameLabel: String,
        valueInput: String,
        valueLabel: String
    },
}
</script>
<style lang="scss">
    label.labelImput {
        display: block;
        margin-bottom: 10px;
        font-size: 24px;
    }
    .input {
        width: 100%;
    }
</style>