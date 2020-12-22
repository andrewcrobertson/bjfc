<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardOfficial from './components/CardOfficial';
  import type { IState } from './state';
  export let state: IState = null;

  const initials = state.ageGroupCode;
  const text = state.name;
  const href = `/teams/${state.code}/players`;
  const colour = background[state.teamGender ?? 'Mixed'];

  pageTitle.set('Officials');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading {colour} {initials} {text} />
    <div class="flex justify-end items-center text-sm py-1"><a class="text-sm border border-gray-300 px-3 py-1" {href}>Players</a></div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {#each state.officials as { role, official }}
      <CardOfficial class="w-full" {role} {official} />
    {:else}
      <p class="p-4">There are no officials</p>
    {/each}
  </div>
</div>
