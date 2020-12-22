<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import type { IState } from './state';

  export let state: IState = null;
  const links = state.links;

  pageTitle.set('Home');
</script>

<a class="block items-center border border-gray-300 px-6 py-3 " href="/team-dashboard">Team List</a>
<a class="block items-center border border-gray-300 px-6 py-3 mt-2" href="/committee">Committee</a>
