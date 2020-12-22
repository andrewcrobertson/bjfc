<script lang="ts">
  import CakeIcon from '@this/components/icon/CakeIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let label: string = null;
</script>

<LabelledIcon class={rootClass} {iconClass} icon={CakeIcon}>{label}</LabelledIcon>
