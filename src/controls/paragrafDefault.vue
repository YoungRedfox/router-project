<template>
    <div class="wrapParagraf">
        <p :class="className">{{typeValue}}
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: "paragrafDefault",
    props: {
        className: {
            type: String,
            require: true,
        },
        value: {
            type: String,
            default: "",
        },
        valueNumber: {
            type: Number,
        }
    },
    computed: {
        typeValue(){
            if(this.value === "" && this.valueNumber !== undefined){
                return this.valueNumber
            } else {
                return this.value
            }
        }
    }
}
</script>

<style lang="scss">
    .wrapParagraf{
        .type-1{
           align-items: center;     
           display: flex;     
           flex-wrap: wrap;     
           font-size: 1.25rem;     
           font-weight: 800;     
           letter-spacing: .0125em;     
           line-height: 2rem;     
           word-break: break-all;
        }
        .type-2{
           align-items: center;     
           display: flex;     
           flex-wrap: wrap;     
           font-size: 1.05rem;     
           font-weight: 600;     
           letter-spacing: .0125em;     
           line-height: 2rem;     
           word-break: break-all;
        }
        .type-3{
           align-items: center;     
           display: flex;     
           flex-wrap: wrap;     
           font-size: 1rem;     
           font-weight: 400;     
           letter-spacing: .0125em;     
           line-height: 2rem;     
           word-break: break-all;
        }
        .type-4{
           align-items: center;     
           display: flex;     
           flex-wrap: wrap;     
           font-size: 0.6rem;     
           font-weight: 500;     
           letter-spacing: .0125em;     
           line-height: 1rem;     
           word-break: break-all;
        }
        .type-5{
           align-items: center;     
           display: flex;     
           flex-wrap: wrap;     
           font-size: 1.05rem;     
           font-weight: 600;     
           letter-spacing: .0125em;     
           line-height: 1rem;     
           word-break: break-all;
        }
    }
</style>