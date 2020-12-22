<script lang="ts">
  import ShieldCheckIcon from '@this/components/icon/ShieldCheckIcon';

  export let insuredCount: number = 0;
  export let colour = 'gray';
</script>

<span class="flex items-center text-sm">
  <ShieldCheckIcon class="w-5 h-5 mr-1 text-{colour}-500" />
  {insuredCount}
  Insured
</span>
