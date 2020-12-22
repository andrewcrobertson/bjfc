<script lang="ts">
  import PlayerHistoricalLabelledIcon from '@this/components/labelledIcon/PlayerHistoricalLabelledIcon';
  import PlayerInsuredLabelledIcon from '@this/components/labelledIcon/PlayerInsuredLabelledIcon';
  import PlayerRecentLabelledIcon from '@this/components/labelledIcon/PlayerRecentLabelledIcon';
  import PlayerRegisteredLabelledIcon from '@this/components/labelledIcon/PlayerRegisteredLabelledIcon';
  import PlayerTransferredLabelledIcon from '@this/components/labelledIcon/PlayerTransferredLabelledIcon';
  import PlayerUnknownLabelledIcon from '@this/components/labelledIcon/PlayerUnknownLabelledIcon';
  import type { PlayerStatusEnum } from '@this/constants/enums';
  import * as playerStatusEnum from '@this/constants/playerStatusEnum';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let status: PlayerStatusEnum = playerStatusEnum.unknown;
  export let club: string = null;

  const iconMap = {
    [playerStatusEnum.insured]: PlayerInsuredLabelledIcon,
    [playerStatusEnum.registered]: PlayerRegisteredLabelledIcon,
    [playerStatusEnum.recent]: PlayerRecentLabelledIcon,
    [playerStatusEnum.transferred]: PlayerTransferredLabelledIcon,
    [playerStatusEnum.historical]: PlayerHistoricalLabelledIcon,
    [playerStatusEnum.unknown]: PlayerUnknownLabelledIcon,
  };

  const icon = iconMap[status ?? playerStatusEnum.unknown];
</script>

<svelte:component this={icon} class={rootClass} {iconClass} {club} />
