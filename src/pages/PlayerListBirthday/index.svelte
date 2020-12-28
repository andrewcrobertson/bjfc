<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import { copyToClipboard } from '@this/common/utility/copyToClipboard';
  import CardPlayer from './components/CardPlayer';
  import type { IState } from './state';
  export let state: IState;

  const colour = 'gray';
  const handleCopy = () => {
    const copyText = 'some cool text';
    copyToClipboard(copyText);
  };

  pageTitle.set('Birthdays');
</script>

<div class="container mx-auto xl:py-10">
  {#each state.birthdaysByMonth as { month, players }, i}
    <div class="flex flex-col sm:flex-row sm:justify-between p-2 mb-4 {i === 0 ? '' : 'mt-4'}">
      <AvatarHeading {colour} text="{month} Birthdays" />
      <div class="flex flex-col text-sm space-y-1"><button class="border border-gray-300 px-3 py-1" on:click={handleCopy}>Copy</button></div>
    </div>
    {#each players as player, i}
      <CardPlayer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
    {:else}
      <p class="p-4">No players with {month} birthdays</p>
    {/each}
  {:else}
    <p class="p-4">No players with upcoming birthdays</p>
  {/each}
</div>
