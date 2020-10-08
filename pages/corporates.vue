<template>
  <div>
    <NavOne />
    <PageHeader title="Corporates" image="/assets/images/markets.jpg" />
    <Corporate />
   
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
  import Corporate from "../components/Corporate";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Corporate,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Corporate"
      }
    }
  }
</script>
