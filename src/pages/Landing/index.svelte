<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import logoUrl from './logo.png';
  export const state = null;

  // if(state) console.log(state);
  pageTitle.set('Home');
</script>

<style>
  /* div {
    background: var(--background-url) no-repeat;
    background-position: center center;
    background-size: contain;
    opacity: 0.1;
  } */
</style>

<div style="--background-url:url({logoUrl})">
  <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href="/team-dashboard">Team List</a>
  <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href="/committee">Committee</a>
</div>
