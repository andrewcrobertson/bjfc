<script lang="ts">
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';
  import XIcon from '@this/components/icon/XIcon';
  import CheckIcon from '@this/components/icon/CheckIcon';

  export let filled = false;
  export let role = null;
  export let colour = 'gray';

  const iconClass = filled ? `text-${colour}-500` : 'text-white';
  const icon = filled ? CheckIcon : XIcon;
</script>

<LabelledIcon {icon} {iconClass}>{role}</LabelledIcon>
