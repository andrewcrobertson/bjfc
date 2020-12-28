<script lang="ts">
  import { getUrlCommitteeList, getUrlHome, getUrlPlayerBirthdayList, getUrlPlayerSearch, getUrlTeamList } from '@this/common/utility/getUrl';

  let rootClass = '';
  export { rootClass as class };
  export let open = false;
</script>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>

<aside class="{rootClass} absolute w-11/12 md:w-96 h-full bg-gray-200 border-r-2 shadow-lg" class:open>
  <nav class="p-4 text-xl">
    <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlHome()} on:click={() => (open = false)}>Home</a>
    <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlTeamList()} on:click={() => (open = false)}>Teams</a>
    <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlCommitteeList()} on:click={() => (open = false)}>Committee</a>
    <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlPlayerBirthdayList()} on:click={() => (open = false)}>Birthdays</a>
    <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlPlayerSearch()} on:click={() => (open = false)}>Search</a>
  </nav>
</aside>
