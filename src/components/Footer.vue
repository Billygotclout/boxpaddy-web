<template>
    <div class="mt-24 ">
        <section class=" flex items-start justify-around ">
            <img src="../assets/boxpaddy2.png" alt="">
            <section class="flex  space-x-24">
                <section class="">
                    <h3 class="text-primaryPurple font-harabara text-2xl">Products</h3>
                    <section class="font-lato">
                        <p>Rider</p>
                        <p>Driver</p>
                        <p>Business</p>
                    </section>

                </section>
                <section class="">
                    <h3 class="text-primaryPurple font-harabara text-2xl">Legal</h3>
                    <section class="font-lato">
                        <p>Terms of Service</p>
                        <p>Privacy</p>

                    </section>

                </section>
                <section class="">
                    <h3 class="text-primaryPurple font-harabara text-2xl">Community</h3>
                    <section class="font-lato">
                        <p>FAQs</p>
                        <p>Blog</p>

                    </section>

                </section>

                <section class="space-y-4">
                    <p><em>BoxPaddy is available on:</em></p>
                    <section class="space-x-3 flex pt-">
                        <Button title="App Store">
                            <img src="../assets/apple.png" alt="" class="mr-3" />
                        </Button>
                        <Button title="Play Store">
                            <img src="../assets/play.png" alt="" class="mr-3" />
                        </Button>
                    </section>
                    <img src="../assets/social.png" alt="" class="ml-28">
                </section>
            </section>
        </section>

    </div>
</template>

<script setup>
import Button from './Button.vue';

</script>

<style lang="scss" scoped></style>