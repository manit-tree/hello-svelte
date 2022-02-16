<script>
export let user;
</script>

<div class="ux-card">
    <div class="ux-user">
        <div class="ux-image-container">
            <img src="{user.image}" width="85" height="85" alt="{user.name}" />
        </div>
        <div class="ux-user-info">
            <p class="ux-title">{user.name}</p>
            <p class="ux-email">{user.email}</p>
        </div>
        <!-- svelte-ignore a11y-missing-content -->
        <a href="#user/{user.id}" />
    </div>
</div>
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

.ux-user {
    display: flex;
    position: relative;

    & a {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
    }

    & .ux-image-container {
        margin-right: 1em;;
    }

    & img {
        object-fit: cover;
        vertical-align: top;
    }

    & .ux-user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & .ux-title {
        font-weight: bold;
    }
}


@media screen and (max-width: 640px) {
    .ux-card {
        border-radius: 0;
    }
}
</style>