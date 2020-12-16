<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardOfficial from './components/CardOfficial';
  import CardOfficialEmpty from './components/CardOfficialEmpty';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  pageTitle.set(team.name);
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each team.officials as { role, official }}
      {#if official === null}
        <CardOfficialEmpty class="md:w-1/2 w-full p-2 sm:p-4" {role} />
      {:else}
        <CardOfficial class="md:w-1/2 w-full p-2 sm:p-4" {role} {official} />
      {/if}
    {:else}
      <p class="p-4">There are no officials</p>
    {/each}
  </div>
</div>
