<script>
// @ts-nocheck

import {app} from '../stores/app-store';

const back = () => {
    console.log(history.length);
    if (history.length > 0) {
        history.back();
    }
}

const home = () => {
    window.location = '#home';
}
</script>

<div class="ux-header">
    {#if $app.active_page != 'home'}
    <img src="./static/icon-back.svg" width="24" height="24" alt="back" class="ux-icon-left" on:click={back} />
    {/if}
    <div class="ux-title">
        <img src="./static/svelte.png" width="32" height="32" alt="svelte" />
        <h1>Hello Svelte</h1>
    </div>
    {#if $app.active_page != 'home'}
    <img src="./static/icon-home.svg" width="24" height="24" alt="home" class="ux-icon-right" on:click={home} />
    {/if}
</div>

<style lang="scss">
.ux-header {
    height: 64px;
    background-color: #252526;
    display: flex;
    align-items: center;
    color: #fafafa;

    & .ux-title {
        flex: 1;
        text-align: center;
        font-size: 0.6em;
        text-transform: uppercase;
    }

    & .ux-title img {
        vertical-align: middle;
    }

    & .ux-title h1 {
        display: inline-block;
        vertical-align: middle;
    }

    & .ux-icon-left {
        margin-left: 1em;
        cursor: pointer;
    }

    & .ux-icon-right {
        margin-right: 1em;
        cursor: pointer;
    }
}
</style>