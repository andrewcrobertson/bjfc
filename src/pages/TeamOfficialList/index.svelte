<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardOfficial from './components/CardOfficial';
  import CardOfficialEmpty from './components/CardOfficialEmpty';
  import type { IState } from './state';
  export let state: IState = null;

  const code = state.code;
  const ageGroupCode = state.ageGroupCode;
  const name = state.name;
  const officials = state.officials;
  const colour = background[state.teamGender ?? 'Mixed'];

  pageTitle.set('Officials');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading class="flex items-center space-x-2" {colour} initials={ageGroupCode} text={name} />
    <div class="flex justify-end items-center text-sm py-1"><a class="text-sm border border-gray-300 px-3 py-1" href="/teams/{code}/players">Players</a></div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {#each officials as { role, official }}
      {#if official === null}
        <CardOfficialEmpty class="w-full" {role} />
      {:else}
        <CardOfficial class="w-full" {role} {official} />
      {/if}
    {:else}
      <p class="p-4">There are no officials</p>
    {/each}
  </div>
</div>
