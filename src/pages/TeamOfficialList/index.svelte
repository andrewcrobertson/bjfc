<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardOfficial from './components/CardOfficial';
  import CardOfficialEmpty from './components/CardOfficialEmpty';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  const colour = background[team.teamGender];

  pageTitle.set('Officials');
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex justify-between items-center">
    <AvatarHeading class="pb-5" {colour} initials={team.ageGroupCode} text={team.name} />
    <div class="flex"><a class="text-sm border border-gray-300 px-3 py-3 mr-2" href="/teams/{code}/players">Players</a></div>
  </div>
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each team.officials as { role, official }}
      {#if official === null}
        <CardOfficialEmpty class="md:w-1/2 w-full p-2 sm:p-4" {role} />
      {:else}
        <CardOfficial class="md:w-1/2 w-full p-2 sm:p-4" {role} {official} />
      {/if}
    {:else}
      <p class="p-4">There are no officials</p>
    {/each}
  </div>
</div>
