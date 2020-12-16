<script lang="ts">
  import ClipboardListIcon from '@this/icons/ClipboardListIcon';
  export let registeredCount: number = 0;
  export let colour = 'gray';
</script>

<span class="flex items-center text-sm">
  <ClipboardListIcon class="w-5 h-5 mr-1 text-{colour}-500" />
  {registeredCount}
  Registered
</span>
