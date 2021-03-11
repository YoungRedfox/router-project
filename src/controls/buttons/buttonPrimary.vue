<template>
    <ButtonDefault :type="typeButton" className="primaryBtn" :valueButton="value" />
</template>
<script>
import ButtonDefault from "./buttonDefault";
export default {
  name: "ButtonPrimary",
    components: {
        ButtonDefault,
    },
    props: {
        typeButton: String,
        value: String,
    }
}
</script>
<style lang="scss">

</style>