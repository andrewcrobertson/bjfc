<script lang="ts">
  import Card from './components/Card';
  import teams from './data';
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each teams as { code, ageGroupCode, name, teamGender, headCoach, assistantCoach, teamManager, trainer, registeredCount, paidCount }}
      <Card {ageGroupCode} {name} {teamGender} {headCoach} {assistantCoach} {teamManager} {trainer} {registeredCount} {paidCount} url="/teams/{code}" />
    {/each}
  </div>
</div>
