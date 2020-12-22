<script lang="ts">
  import XIcon from '@this/components/icon/XIcon';
  import CheckIcon from '@this/components/icon/CheckIcon';

  export let filled = false;
  export let role = null;
  export let colour = 'gray';
</script>

<span class="flex items-center text-sm">
  {#if filled}
    <CheckIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
  {:else}
    <XIcon class="inline w-5 h-5 mr-1 text-white" />
  {/if}
  {role}
</span>
