<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import Card from './components/Card';
  import teams from './data';

  pageTitle.set('Team List');
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each teams as { code, ageGroupCode, name, teamGender, headCoach, assistantCoach, teamManager, trainer, registeredCount, paidCount }}
      <Card {code} {ageGroupCode} {name} {teamGender} {headCoach} {assistantCoach} {teamManager} {trainer} {registeredCount} {paidCount} />
    {/each}
  </div>
</div>
