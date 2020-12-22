<script lang="ts">
  import CurrencyDollarIcon from '@this/components/icon/CurrencyDollarIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let label: string = null;
</script>

<LabelledIcon class={rootClass} {iconClass} icon={CurrencyDollarIcon}>{label}</LabelledIcon>
