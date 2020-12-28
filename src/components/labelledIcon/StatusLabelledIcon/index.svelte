<script lang="ts">
  import ChevronDoubleRightIcon from '@this/components/icon/ChevronDoubleRightIcon';
  import ChevronRightIcon from '@this/components/icon/ChevronRightIcon';
  import ClipboardListIcon from '@this/components/icon/ClipboardListIcon';
  import ExclamationIcon from '@this/components/icon/ExclamationIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';
  import LogoutIcon from '@this/components/icon/LogoutIcon';
  import ShieldCheckIcon from '@this/components/icon/ShieldCheckIcon';
  import type { PlayerStatusEnum } from '@this/utility/constants/enums';
  import * as playerStatusEnum from '@this/utility/constants/playerStatusEnum';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let status: PlayerStatusEnum = playerStatusEnum.unknown;
  export let text: string = null;

  const iconMap = {
    [playerStatusEnum.insured]: ShieldCheckIcon,
    [playerStatusEnum.registered]: ClipboardListIcon,
    [playerStatusEnum.recent]: ChevronRightIcon,
    [playerStatusEnum.historical]: ChevronDoubleRightIcon,
    [playerStatusEnum.transferred]: LogoutIcon,
    [playerStatusEnum.unknown]: ExclamationIcon,
  };

  const icon = iconMap[status ?? playerStatusEnum.unknown];
</script>

<LabelledIcon {icon} class={rootClass} {iconClass}>{text}</LabelledIcon>
