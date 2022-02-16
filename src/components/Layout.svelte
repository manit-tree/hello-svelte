<script>
import Header from './Header.svelte';
import Footer from './Footer.svelte';

</script>

<div class="ux-layout">
    <Header />
    <main>
        <slot></slot>
    </main>
    <Footer />
</div>

<style lang="scss">
.ux-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    & main {
        flex: 1;
        padding: 2.5em;
        position: relative;
    }
}

@media screen and (max-width:640px) {
.ux-layout {
    & main {
        padding: 0;
    }
}
}
</style>