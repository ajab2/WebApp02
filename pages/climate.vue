<template>
  <div>
    <NavOne />
    <PageHeader title="Climate" image="/assets/images/markets.jpg" />
    <Climate />
   
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
  import Climate from "../components/Climate";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Climate,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Climate"
      }
    }
  }
</script>
