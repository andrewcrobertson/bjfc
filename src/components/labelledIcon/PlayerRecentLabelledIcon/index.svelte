<script lang="ts">
  import ShieldCheckIcon from '@this/components/icon/ShieldCheckIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;

  const textSanitised = text ?? 'Recent';
</script>

<LabelledIcon class={rootClass} {iconClass} icon={ShieldCheckIcon}>{textSanitised}</LabelledIcon>
