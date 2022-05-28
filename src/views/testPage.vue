<template>
  <section class="test-page">
    <h1>test!</h1>
  </section>
</template>

<script>

import { storageService } from "@/services/storage.service";

export default {
  name: "testPage",
  created(){
    const aniaml = storageService.load('data')
    console.log(aniaml.type);
  }
};
</script>
