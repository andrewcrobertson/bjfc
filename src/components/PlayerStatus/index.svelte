<script lang="ts">
  import type { PlayerStatusEnum } from '@this/constants/enums';
  import * as playerStatusEnum from '@this/constants/playerStatusEnum';
  import ClipboardListIcon from '@this/icons/ClipboardListIcon';
  import ExclamationIcon from '@this/icons/ExclamationIcon';
  import LogoutIcon from '@this/icons/LogoutIcon';
  import ShieldCheckIcon from '@this/icons/ShieldCheckIcon';
  import XIcon from '@this/icons/XIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let status: PlayerStatusEnum = playerStatusEnum.unknown;
  export let club: string = null;
</script>

<span class="{rootClass} flex items-center text-sm">
  {#if status === playerStatusEnum.insured}
    <ShieldCheckIcon class="{iconClass} w-5 h-5 mr-1" />
    Insured
  {:else if status === playerStatusEnum.registered}
    <ClipboardListIcon class="{iconClass} w-5 h-5 mr-1" />
    Registered
  {:else if status === playerStatusEnum.recent}
    <ShieldCheckIcon class="{iconClass} w-5 h-5 mr-1" />
    Recent
  {:else if status === playerStatusEnum.transferred}
    <LogoutIcon class="{iconClass} w-5 h-5 mr-1" />
    {club === null ? 'Transferred' : club}
  {:else if status === playerStatusEnum.historical}
    <XIcon class="{iconClass} w-5 h-5 mr-1" />
    Historical
  {:else}
    <ExclamationIcon class="{iconClass} w-5 h-5 mr-1" />
    Unknown
  {/if}
</span>
