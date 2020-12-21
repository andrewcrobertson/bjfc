<script lang="ts">
  import CakeIcon from '@this/icons/CakeIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let dateOfBirth: string = null;
</script>

<span class="{rootClass} flex items-center text-sm">
  <CakeIcon class="{iconClass} w-5 h-5 mr-1" />
  {dateOfBirth}
</span>
