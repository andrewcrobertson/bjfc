<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardPlayer from './components/CardPlayer';
  import type { IState } from './state';
  export let state: IState;

  pageTitle.set('Birthdays');
</script>

<div class="container mx-auto xl:py-10">
  {#each state.players as player, i}
    <CardPlayer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
  {:else}
    <p class="p-4">No players with upcoming birthdays</p>
  {/each}
</div>
