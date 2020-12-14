<script lang="ts">
  import Card from './components/Card';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#each team.members as { footyWebNumber, familyName, firstName, dateOfBirth, gender }}
      <Card initials="AR" {familyName} {firstName} {dateOfBirth} {gender} url="/members/{footyWebNumber}" />
    {/each}
  </div>
</div>
