<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import { copyToClipboard } from '@this/scripts/utility/copyToClipboard';
  import { xxx } from '@this/scripts/utility/xxx';

  import CardPlayer from './components/CardPlayer';
  import type { IState } from './state';
  export let state: IState;

  const clipboardText = xxx(state.monthName, state.players);
  const colour = 'gray';
  const handleCopy = () => copyToClipboard(clipboardText);

  pageTitle.set('Birthdays');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between p-2 mb-4">
    <AvatarHeading {colour} text={state.monthName} />
    <div class="flex flex-col text-sm space-y-1"><button class="border border-gray-300 px-3 py-1" on:click={handleCopy}>Copy</button></div>
  </div>
  {#each state.players as player, i}
    <CardPlayer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
  {:else}
    <p class="p-4">No players with {state.monthName} birthdays</p>
  {/each}
</div>
