<script lang="ts">
  import AtSymbolIcon from '@this/components/icon/AtSymbolIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;
</script>

<LabelledIcon class={rootClass} {iconClass} icon={AtSymbolIcon}>{text}</LabelledIcon>
