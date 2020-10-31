<template>
  <section class="mailchimp-one">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="mailchimp-one__content">
                        <div class="mailchimp-one__icon">
                            <i class="kipso-icon-email"></i><!-- /.kipso-icon-email -->
                        </div><!-- /.mailchimp-one__icon -->
                        <h2 class="mailchimp-one__title">Get latest Projects <br>
                            updates by signing up</h2><!-- /.mailchimp-one__title -->
                    </div><!-- /.mailchimp-one__content -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6 d-flex">
                    <div class="my-auto">
                        <form action="#" class="mailchimp-one__form mc-form">
                            <input type="text" id="mc-email" placeholder="Enter your email ">
                            <button type="submit" class="thm-btn">Subscribe</button>
                        </form><!-- /.mailchimp-one__form -->
                        <div class="mc-form__response"></div><!-- /.mc-form__response -->
                    </div><!-- /.my-auto -->
                </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>
</template>

<script>
    export default {
        name: "Subscribe"
    }
</script>

<style scoped>

</style>
