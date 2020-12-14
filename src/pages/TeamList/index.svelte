<script lang="ts">
  import Card from './components/Card';
  import teams from './data';
</script>

<div class="max-w-6xl mx-auto px-5 py-24 ">
  <div class="flex flex-wrap -m-4">
    {#each teams as { code, ageGroupCode, name, teamGender, headCoach, assistantCoach, teamManager, trainer }}
      <Card {ageGroupCode} {name} {teamGender} {headCoach} {assistantCoach} {teamManager} {trainer} url="/teams/{code}" />
    {/each}
  </div>
</div>
