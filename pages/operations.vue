<template>
  <div>
    <NavOne />
    <PageHeader title="Supply Chain" image="/assets/images/markets.jpg" />
    <Operation />
   
    <div class="border-bottom"></div>
    <Gallery />
    <CallToActionOne />
    <Footer />
  </div>

</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import Operation from "../components/Operation";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Operation,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | operations"
      }
    }
  }
</script>
