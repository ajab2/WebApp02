<template>
  <div>
    <NavOne />
    <PageHeader title="Energy" image="/assets/images/markets.jpg" />
    <Energy />
   
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
  import Energy from "../components/Energy";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Energy,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Energy"
      }
    }
  }
</script>
