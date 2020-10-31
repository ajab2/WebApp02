<template>
  <div>
    <NavOne />
    <PageHeader title="Pricing Plans" />
    <PricingPage />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import PricingPage from "../components/PricingPage";
  import CallToAction from "../components/CallToAction";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, CallToAction, PricingPage, NavOne, PageHeader},
    head(){
      return {
        title: "Kipso | Pricing"
      }
    }
  }
</script>

<style scoped>
  .block-title .block-title__title {
    display: none;
  }
</style>
