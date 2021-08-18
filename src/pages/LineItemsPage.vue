<template>
  <h4 class="text-center text-weight-bold q-pa-lg title">Line Items</h4>
  <div class="q-ma-lg">
    <line-items/>
  </div>
</template>

<script>
import LineItems from "components/line-items/line-item";

export default {
  name: "LineItemsPage",
  components: {LineItems},
}
</script>

<style scoped>
.title{
  border: 2px solid;
  border-radius: 30px;
  margin: 2em
}
</style>
