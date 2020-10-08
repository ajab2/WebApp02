<template>
  <div>
    <NavOne />
    <PageHeader title="Anchor Initiative" image="/assets/images/markets.jpg" />
    <Initiative />
   
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
  import Initiative from "../components/Initiative";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Initiative,
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
