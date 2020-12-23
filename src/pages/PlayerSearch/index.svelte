<script lang="ts">
  import debounce from 'lodash/debounce';
  import filter from 'lodash/filter';
  import find from 'lodash/find';
  import includes from 'lodash/includes';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardPlayer from './components/CardPlayer';
  import type { IState } from './state';
  export let state: IState;

  let searchTerm = '';
  let matchingPlayers = [];

  const findPlayers = () => (matchingPlayers = filter(state.players, ({ searchTerms }) => find(searchTerms, (st) => includes(st, searchTerm)) !== undefined));
  const handleInput = debounce(findPlayers, 250, { maxWait: 1000 });

  pageTitle.set('Search');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col mb-4">
    <label class="text-lg text-grey-darkest" for="searchTerm">Find Players</label>
    <input class="border text-grey-darkest py-2 px-3" type="text" name="searchTerm" id="searchTerm" bind:value={searchTerm} on:input={handleInput} />
  </div>

  <div class="flex flex-wrap">
    {#each matchingPlayers as player, i (player.footyWebNumber)}
      <CardPlayer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
    {:else}
      <p class="text-sm p-4">No players match your current search</p>
    {/each}
  </div>
</div>
