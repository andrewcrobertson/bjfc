<script lang="ts">
  import format from 'date-fns/format';
  import { getUrlCommitteeList, getUrlPlayerBirthdayList, getUrlPlayerSearch, getUrlTeamList } from '@this/scripts/utility/getUrl';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import logoUrl from './logo.png';
  export const state = null;

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const getMonthName = (month: number) => format(new Date(1900, month - 1, 1), 'MMMM');

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
  <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlPlayerSearch()}>Search</a>
  {#each months as month}
    <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlPlayerBirthdayList(month.toString())}>{getMonthName(month)} Birthdays</a>
  {/each}
</div>
