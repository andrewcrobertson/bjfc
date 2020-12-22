<script lang="ts">
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';
  import type { PlayerStatusEnum } from '@this/constants/enums';
  import * as playerStatusEnum from '@this/constants/playerStatusEnum';
  import ClipboardListIcon from '@this/components/icon/ClipboardListIcon';
  import ExclamationIcon from '@this/components/icon/ExclamationIcon';
  import LogoutIcon from '@this/components/icon/LogoutIcon';
  import ShieldCheckIcon from '@this/components/icon/ShieldCheckIcon';
  import XIcon from '@this/components/icon/XIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let status: PlayerStatusEnum = playerStatusEnum.unknown;
  export let club: string = null;

  const iconMap = {
    [playerStatusEnum.insured]: ShieldCheckIcon,
    [playerStatusEnum.registered]: ClipboardListIcon,
    [playerStatusEnum.recent]: ShieldCheckIcon,
    [playerStatusEnum.transferred]: LogoutIcon,
    [playerStatusEnum.historical]: XIcon,
    [playerStatusEnum.unknown]: ExclamationIcon,
  };

  const textMap = {
    [playerStatusEnum.insured]: 'Insured',
    [playerStatusEnum.registered]: 'Registered',
    [playerStatusEnum.recent]: 'Recent',
    [playerStatusEnum.transferred]: club === null ? 'Transferred' : club,
    [playerStatusEnum.historical]: 'Historical',
    [playerStatusEnum.unknown]: 'Unkown',
  };

  const icon = iconMap[status ?? playerStatusEnum.unknown];
  const text = textMap[status ?? playerStatusEnum.unknown];
</script>

<LabelledIcon class={rootClass} {iconClass} {icon}>{text}</LabelledIcon>
