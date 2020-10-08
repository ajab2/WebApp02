<template>
  <div>
    <NavOne />
    <PageHeader title="Gallery" />
    <Gallery />
    <Footer />
  </div>
</template>
<script>
  import Gallery from "../components/Gallery";
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, NavOne, PageHeader, Gallery},
    head(){
      return {
        title: "Kipso | Gallery"
      }
    }
  }
</script>
