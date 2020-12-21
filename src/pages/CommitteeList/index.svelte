<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardMember from './components/CardMember';
  import type { IState } from './state';
  export let state: IState = null;

  const committeeList = state.committeeList;
  pageTitle.set('Committee');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each committeeList as member}
      <CardMember class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" {member} />
    {:else}
      <p class="p-4">There are no committee members</p>
    {/each}
  </div>
</div>
