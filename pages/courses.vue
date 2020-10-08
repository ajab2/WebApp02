<template>
  <div>
    <NavOne />
    <PageHeader title="Courses" />
    <Course />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import Course from "../components/Course";
  export default {
    components: {Course, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "Kipso | Course"
      }
    }
  }
</script>
