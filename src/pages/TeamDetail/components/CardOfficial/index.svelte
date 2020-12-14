<script lang="ts">
  export let official = null;
  export let role = null;

  const officialString = official === null ? 'TBD' : `${official.firstName} ${official.familyName}`;
</script>

<p class="text-sm"><span class="font-medium">{role}:</span> {officialString}</p>
