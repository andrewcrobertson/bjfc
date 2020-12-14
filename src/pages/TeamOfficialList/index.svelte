<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardNoOfficial from './components/CardNoOfficial';
  import CardOfficial from './components/CardOfficial';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  pageTitle.set(team.name);

  const officials = [
    { role: 'Coach', official: team.headCoach },
    { role: 'Assistant Coach', official: team.assistantCoach },
    { role: 'Team Manager', official: team.teamManager },
    { role: 'Trainer', official: team.trainer },
  ];
</script>

<div class="flex flex-wrap sm:p-4">
  {#each officials as { role, official }}
    {#if official === null}
      <CardNoOfficial class="md:w-1/2 w-full p-2 sm:p-4" {role} />
    {:else}
      <CardOfficial class="md:w-1/2 w-full p-2 sm:p-4" {role} {official} />
    {/if}
  {:else}
    <p class="p-4">There are no officials</p>
  {/each}
</div>
