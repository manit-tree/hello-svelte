<script>
import {app} from '../stores/app-store.js';
import Card from './Card.svelte';
import Loading from './Loading.svelte';

const fetchUser = async () => {  
    console.log('fetchUser');
    const url = 'https://users-server.8columns.repl.co/user/' + $app.active_user;
    const res = await fetch(url);
    const out = await res.json();
    return out;
}

let promise = fetchUser();
</script>

<div class="ux-user-detail fadeIn">
    {#await promise}
        <Loading />
    {:then user}
        <Card padding={true}>
            <div class="ux-image-container">
                <img src={user.image} width="120" height="120" alt="{user.name}">
            </div>
            <h3 class="ux-title">{user.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium corporis quas in totam at, assumenda pariatur harum alias quibusdam nemo facilis fugiat nobis distinctio dicta, optio dolor. Doloribus impedit ratione maxime quia est commodi veritatis. Eum omnis culpa velit deleniti perspiciatis corrupti aliquam est expedita adipisci, sapiente nobis consequuntur?</p>
            <div class="ux-table">
                <div>
                    <span class="ux-key">ID</span>
                    <span class="ux-value">{user.id}</span>
                </div>
                <div>
                    <span class="ux-key">E-mail</span>
                    <span class="ux-value">{user.email}</span>
                </div>
                <div>
                    <span class="ux-key">Twitter</span>
                    <span class="ux-value">{user.twitter}</span>
                </div>
            </div>
        </Card>
    {/await}
</div>

<style lang="scss">
.ux-user-detail {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;

    & .ux-image-container {
       margin-bottom: 0.5em;

    }

    & img {
        border-radius: 50%;
    }

    & .ux-title {
        margin-bottom: 1em;
    }

    & p {
        line-height: 1.6em;
        margin-bottom: 1em;;
    }

    & .ux-table {
        font-size: 0.9em;
    }

    & .ux-table > div {
        display: flex;
        border-bottom: 1px solid #eee;
        padding: 0.75em 0;
    }

    & .ux-table > div:last-child {
        border-bottom: 0;
    }

    & .ux-table .ux-key {
        font-weight:  bold;
    }

    & .ux-table .ux-value {
        flex: 1;
        text-align: right;
    }
}    
</style>