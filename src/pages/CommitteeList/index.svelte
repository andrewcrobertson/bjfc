<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardCommitteeMember from './components/CardCommitteeMember';
  import officials from './data';

  pageTitle.set('Committee');
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each officials as official}
      <CardCommitteeMember class="md:w-1/2 w-full p-2 sm:p-4" {official} />
    {:else}
      <p class="p-4">There are no committee members</p>
    {/each}
  </div>
</div>
