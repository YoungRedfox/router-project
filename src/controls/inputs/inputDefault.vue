<template>
    <span>
        <label :for="nameInput" class="labelImput" :class="classNameLabel">{{valueLabel}}</label>
        <input 
        :type="typeInput" 
        class="input" 
        :class="className" 
        v-model="valueInput" 
        :id="idInput" 
        :name="nameInput"
        :placeholder="placeholderInput" 
        @change="changeValue(valueInput)"
        @focusin="focusInput"
        @focusout="onfocusInput(valueInput)"
        @keyup="keyUp(valueInput)"
        >
        <p :style="{visibility: validate.isQuiteLong ? 'visible' : 'hidden'}">{{validate.massage}}</p>
    </span>
</template>
<script>
export default {
    name: "DefaultInput",
    data(){
        return {
            flagIdValited: true
        }
    },
    computed: {
        validate(){
            if(!this.flagIdValited){
            switch(this.nameInput){
                case 'title':
                    console.log(this.valueInput)
                    return {isQuiteLong: this.valueInput.length < 5, massage: "Za mała ilość znaków w tytule"}
                
                case 'urlImg':
                    return {isQuiteLong: this.valueInput.length < 10, massage: "Zły link do zdjęcia"}

                case 'author':
                    return {isQuiteLong: this.valueInput.length <= 3, massage: "Za krótka nazwa użytkownika"}

                default: 
                    return false
            }
            }
            return false
        }
    },
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
        valueLabel: String,

    },
    methods: {
        changeValue(value){
             this.$emit('change', value)
            //  console.log(value)
        },
        focusInput(){
            this.$emit('focus')
        },
        onfocusInput(value){
            this.$emit('onfocus', value)
        },
        keyUp(value){
            this.$emit('keyup', value)
        }
    }
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
        &:focus{
            color: brown;
        }
    }
</style>