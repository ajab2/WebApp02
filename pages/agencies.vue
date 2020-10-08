<template>
  <div>
    <NavOne />
    <PageHeader title="Promotion Agency" image="/assets/images/markets.jpg" />
    <Agency />
   
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
  import Agency from "../components/Agency";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Agency,
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
