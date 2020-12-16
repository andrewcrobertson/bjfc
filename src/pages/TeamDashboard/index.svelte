<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import TeamCard from './components/TeamCard';
  import teams from './data';

  pageTitle.set('Team List');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each teams as team}
      <TeamCard class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" {team} />
    {/each}
  </div>
</div>
