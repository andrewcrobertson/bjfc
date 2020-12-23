<script lang="ts">
  import { getUrlCommitteeList, getUrlPlayerBirthdayList, getUrlPlayerSearch, getUrlTeamList } from '@this/utility/getUrl';
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

<div class="container mx-auto xl:py-10" style="--background-url:url({logoUrl})">
  <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlTeamList()}>Teams</a>
  <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlCommitteeList()}>Committee</a>
  <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlPlayerBirthdayList()}>Birthdays</a>
  <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlPlayerSearch()}>Search</a>
</div>
