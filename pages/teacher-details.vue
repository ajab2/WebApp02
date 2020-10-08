<template>
  <div>
    <NavOne />
    <PageHeader title="Global Leadership" image="/assets/images/banner1.jpg" />
    <TeacherDetails />
    <Footer /> 
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import TeacherDetails from "../components/TeacherDetails";
  export default {
    components: {TeacherDetails, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "ADFG | Global Leadership"
      }
    }
  }
</script>
