<script lang="ts">
  import LogoutIcon from '@this/components/icon/LogoutIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let club: string = null;

  const textSanitised = club ?? 'Transferred';
</script>

<LabelledIcon class={rootClass} {iconClass} icon={LogoutIcon}>{textSanitised}</LabelledIcon>
