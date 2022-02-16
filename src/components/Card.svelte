<script>
export let padding = false;
</script>

<div class="ux-card" class:padding><slot></slot></div>

<style lang="scss">
.ux-card {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 12px;
    overflow: hidden;

    &.padding {
        padding: 2.5em;
    }
} 

@media screen and (max-width:640px) {
    .ux-card {
        box-shadow: none;
        border-radius: 0;
    }
}
</style>