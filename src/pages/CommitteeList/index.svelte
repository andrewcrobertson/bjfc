<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardMember from './components/CardMember';
  import members from './data';

  pageTitle.set('Committee');
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each members as member}
      <CardMember class="w-full md:w-1/2 xl:w-1/3" {member} />
    {:else}
      <p class="p-4">There are no committee members</p>
    {/each}
  </div>
</div>
