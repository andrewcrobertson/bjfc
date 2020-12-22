<script lang="ts">
  import InformationCircleIcon from '@this/components/icon/InformationCircleIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let type: string = null;
  export let notes: string = null;

  const text = notes === null ? type : `${type}: ${notes}`;
</script>

<span class="{rootClass} flex items-center">
  <InformationCircleIcon class="{iconClass} w-5 h-5 mr-1" />
  {text}
</span>
