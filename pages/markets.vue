<template>
  <div>
    <NavOne />
    <PageHeader title="Emerging Markets" image="/assets/images/markets.jpg" />
    <Market />
   
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
  import Market from "../components/Market";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Market,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Markets"
      }
    }
  }
</script>
