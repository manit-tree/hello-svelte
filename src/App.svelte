<script>
import Users from './components/Users.svelte';
import Layout from './components/Layout.svelte';
import {app} from './stores/app-store.js';
import UserDetail from './components/UserDetail.svelte';
import Loading from './components/Loading.svelte';

const route = () => {
  console.log('route');
	let hash = location.hash.split('#')[1] || 'home';
	let [uri, query] = hash.split('?')
  let [path, param] = uri.split('/');

  $app.active_page = path;

  if (path == 'user') {
    $app.active_user = parseInt(param);
  }
}

const onHashChange = (event) => {
  route();
}

const fetchUsers = async () => {
  const url = 'https://users-server.8columns.repl.co/users';
  const res = await fetch(url);
  const out = await res.json();

  $app.users_current_page = out.page;
  $app.users_has_more = out.has_more;
  return out.data;
}

let promise = fetchUsers();
route()
</script>
<Layout>
  {#if $app.active_page == 'home'}
    {#await promise}
      <Loading />
    {:then users}
      <Users {users} />
    {/await}
  {:else}
  <UserDetail />
  {/if}
</Layout>
<svelte:window on:hashchange={onHashChange}/>