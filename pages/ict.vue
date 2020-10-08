<template>
  <div>
    <NavOne />
    <PageHeader title="ICT" image="/assets/images/markets.jpg" />
    <Ict />
   
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
  import Ict from "../components/Ict";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Ict,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Ict"
      }
    }
  }
</script>
