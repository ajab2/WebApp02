<template>
  <div>
    <NavOne />
    <PageHeader title="Health & Nutrition" image="/assets/images/markets.jpg" />
    <Health />
   
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
  import Health from "../components/Health";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Health,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Health"
      }
    }
  }
</script>
