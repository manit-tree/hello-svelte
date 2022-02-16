<script>
import User from './User.svelte';
import {inview} from 'svelte-inview';
import LoadMore from './LoadMore.svelte';
import {app} from '../stores/app-store.js';
export let users;

const loadMore = () => {
    if ($app.users_has_more == 1) {
        const fetchUsers = async () => {
            let page = $app.users_current_page + 1;
            const url = 'https://users-server.8columns.repl.co/users?page=' + page;
            const res = await fetch(url);
            const out = await res.json();

            $app.users_current_page = out.page;
            $app.users_has_more = out.has_more;

            users = [...users, ...out.data];
        };

        setTimeout(() => {
            fetchUsers();
        }, 300)
    }
}
</script>

<div class="ux-users fadeIn">
    <ul>
        {#each users as user}
        <li>
            <User {user} />
        </li>
        {/each}
    </ul>
</div>
<div class:hidden={$app.users_has_more==0} use:inview on:enter={loadMore}>
    <LoadMore />
</div>

<style lang="scss">
.ux-users {
    max-width: 640px;
    margin: 0 auto;
   
    & ul {
        list-style: none;
        padding: 0;

        & li {
            margin-bottom: 1em;
        }

        & li:last-child {
            margin-bottom: 0;

        }

        & li {
            margin-bottom: 1em;
        }

        & li:last-child {
            margin-bottom: 0;
        }        
    }
}

@media screen and (max-width: 640px) {
    .ux-users {
        & ul {
            & li {
                margin-bottom: 1px;
            }
        }
    }
}
</style>